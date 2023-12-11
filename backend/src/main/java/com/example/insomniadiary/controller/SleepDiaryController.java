package com.example.insomniadiary.controller;
import com.example.insomniadiary.domain.image.proptservice.PromptService;
import com.example.insomniadiary.domain.sleepdiary.SleepDiary;
import com.example.insomniadiary.dto.CalendarDto;
import com.example.insomniadiary.dto.Diarydto;
import com.example.insomniadiary.domain.sleepdiary.SleepDiaryRepository;
import com.example.insomniadiary.domain.user.User;
import org.springframework.beans.factory.annotation.Value;
import com.example.insomniadiary.domain.image.Image;
import com.example.insomniadiary.domain.image.ImageRepository;
import com.theokanning.openai.image.CreateImageRequest;
import com.theokanning.openai.service.OpenAiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class SleepDiaryController {

    private final ImageRepository imageRepository;
    private final SleepDiaryRepository sleepDiaryRepository;
    @Value("${openai-key}")
    private String OPENAI_KEY;
    private final PromptService promptService;

    @PostMapping("/generate/image")
    public ResponseEntity<String> generateImage(

            @SessionAttribute(name = "loginUser", required = false) User loginUser,
            @RequestParam String date,
            @RequestParam String diary) {

        System.out.println("loginUser = " + loginUser);
        System.out.println("date = " + date);
        System.out.println("diary = " + diary);

        Image image = new Image();
        image.setPrompt(diary);
        String imageUrl = openAiImageUrl(image);

        System.out.println("imageUrl = " + imageUrl);

        if (loginUser != null) {
            String email = loginUser.getEmail();
            image.setEmail(email);
        }

        image.setUrl(imageUrl);
        image.setEmail("1");
        image.setDate(date);
//        File file = new File(imageUrl);
//        String image1 = awsS3Service.upload(file, "Image");
//        image.setUrl(image1);
//        image.setDate(date);

        log.info("Image generated: {}", image);
        imageRepository.save(image);
        return ResponseEntity.ok("generate Success");
    }

    @PostMapping("/generate/sleepDiary")
    public ResponseEntity<String> generateDiary(
            @SessionAttribute(name = "loginUser", required = false) User loginUser,
            @RequestParam String date,
            @RequestParam String caffeineIntake,
            @RequestParam String caffeineIntakeTime,
            @RequestParam String Exercise,
            @RequestParam String ExerciseTime,
            @RequestParam String pill,
            @RequestParam String pillDosage,
            @RequestParam String SleepTime,
            @RequestParam String wakeUpTime) {

        SleepDiary sleepDiary = new SleepDiary(date,Integer.parseInt(caffeineIntake),Integer.parseInt(caffeineIntakeTime),Integer.parseInt(Exercise),Integer.parseInt(ExerciseTime),pill,Integer.parseInt(pillDosage),Integer.parseInt(SleepTime),Integer.parseInt(wakeUpTime));

        System.out.println("caffeineIntake = " + caffeineIntake);

        System.out.println("sleepDiary = " + sleepDiary);

        if (loginUser != null) {
            String email = loginUser.getEmail();
            sleepDiary.setEmail(email);
        }

        log.info("Diary generated: {}", sleepDiary);


        sleepDiaryRepository.save(sleepDiary);
        return ResponseEntity.ok("generate Success");
    }

    @GetMapping("/diary")
    public ResponseEntity<Diarydto> showDiary(
            @SessionAttribute(name = "loginUser", required = false) User loginUser,
            @RequestParam String date
    ) {

        Optional<SleepDiary> byEmailAndDateSleepDiary = sleepDiaryRepository.findByDate(date);
        Optional<Image> byEmailAndDateImage = imageRepository.findByDate(date);

//        Image image = byEmailAndDateImage.get();
//        String url = image.getUrl();
//        String s3 = awsS3Service.getS3(url);
//        image.setUrl(s3);

        Diarydto diarydto = new Diarydto(byEmailAndDateSleepDiary.orElse(null), byEmailAndDateImage.orElse(null));

        return ResponseEntity.ok(diarydto);
    }

    @GetMapping("/calendar")
    public ResponseEntity<List<CalendarDto>> calendar(
            @SessionAttribute(name = "loginUser", required = false) User loginUser
    ){
        List<SleepDiary> all = sleepDiaryRepository.findAll();

        List<CalendarDto> str = new ArrayList<>();

        for (SleepDiary sleepDiary : all) {
            CalendarDto calendarDto = new CalendarDto(sleepDiary.getDate(), sleepDiary.getSleepTime());
            str.add(calendarDto);
        }
        return ResponseEntity.ok(str);
    }


    private String openAiImageUrl(Image imageToRequest) {
        OpenAiService service = new OpenAiService(OPENAI_KEY);
        String s = promptService.promptService(imageToRequest);
        CreateImageRequest build = CreateImageRequest.builder()
                .prompt(s)
                .n(1)
                .size("512x512")
                .build();

        String imgUrl = service.createImage(build)
                .getData()
                .get(0)
                .getUrl();

        return imgUrl;
    }


}