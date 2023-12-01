package com.example.insomniadiary.controller;
import com.example.insomniadiary.domain.sleepdiary.SleepDiary;
import com.example.insomniadiary.dto.Diarydto;
import com.example.insomniadiary.domain.sleepdiary.SleepDiaryRepository;
import com.example.insomniadiary.domain.user.User;
import com.example.insomniadiary.dto.SleepDiaryDto;
import org.springframework.beans.factory.annotation.Value;
import com.example.insomniadiary.domain.image.Image;
import com.example.insomniadiary.domain.image.ImageRepository;
import com.theokanning.openai.image.CreateImageRequest;
import com.theokanning.openai.service.OpenAiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class SleepDiaryController {

    private final ImageRepository imageRepository;
    private final SleepDiaryRepository sleepDiaryRepository;
    @Value("${openai-key}")
    private String OPENAI_KEY;


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


        if (loginUser != null) {
            String email = loginUser.getEmail();
            image.setEmail(email);
        }

        image.setUrl(imageUrl);
        image.setDate(date);

        log.info("Image generated: {}", image);
        imageRepository.save(image);
        return ResponseEntity.ok("generate Success");
    }

    @PostMapping("/generate/sleepDiary")
    public ResponseEntity<String> generateDiary(
            @SessionAttribute(name = "loginUser", required = false) User loginUser,
            @RequestBody SleepDiaryDto sleepDiaryRequest) {

        SleepDiary sleepDiary = new SleepDiary(
                sleepDiaryRequest.getDate(),
                sleepDiaryRequest.getCaffeineIntake(),
                sleepDiaryRequest.getCaffeineIntakeTime(),
                sleepDiaryRequest.getExercise(),
                sleepDiaryRequest.getExerciseTime(),
                sleepDiaryRequest.getPill(),
                sleepDiaryRequest.getPillDosage(),
                sleepDiaryRequest.getSleepTime(),
                sleepDiaryRequest.getWakeUpTime()
        );

        if (loginUser != null) {
            String email = loginUser.getEmail();
            sleepDiary.setEmail(email);
        }

        log.info("Diary generated: {}", sleepDiary);


        sleepDiaryRepository.save(sleepDiary);
        return ResponseEntity.ok("generate Success");
    }

    @PostMapping("/diary")
    public ResponseEntity<Diarydto> showDiary(
            @SessionAttribute(name = "loginUser", required = false) User loginUser,
            @RequestParam String date
    ) {


        String email = loginUser.getEmail();
        Optional<SleepDiary> byEmailAndDateSleepDiary = sleepDiaryRepository.findByEmailAndDate(email, date);
        Optional<Image> byEmailAndDateImage = imageRepository.findByEmailAndDate(email, date);

        Diarydto diarydto = new Diarydto(byEmailAndDateSleepDiary.orElse(null), byEmailAndDateImage.orElse(null));

        return ResponseEntity.ok(diarydto);
    }


    private String openAiImageUrl(Image imageToRequest) {
        OpenAiService service = new OpenAiService(OPENAI_KEY);
        CreateImageRequest createImageRequest = CreateImageRequest.builder()
                .prompt(imageToRequest.getPrompt())
                .n(1)
                .size("256x256")
                .build();

        String imgUrl = service.createImage(createImageRequest)
                .getData()
                .get(0)
                .getUrl();

        return imgUrl;
    }


}