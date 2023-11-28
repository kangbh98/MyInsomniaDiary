package com.example.insomniadiary.controller;
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

@Slf4j
@RestController
@RequiredArgsConstructor
public class ImageController {

    private final ImageRepository imageRepository;
    @Value("${openai-key}")
    private String OPENAI_KEY;

    @PostMapping("/generate/image")
    public ResponseEntity<String> generate(@SessionAttribute(name = "loginUser", required = false) User loginUser, @RequestParam String date,@RequestParam String prompt) {
        Image image = new Image();
        String imageUrl = openAiImageUrl(image);

        image.setPrompt(prompt);

        imageRepository.save(image);
        if (loginUser != null) {
            String email = loginUser.getEmail();
            image.setEmail(email);
        }

        image.setUrl(imageUrl);
        image.setDate(date);

        log.info("Image generated: {}", image);
        imageRepository.save(image);
        return ResponseEntity.ok("generate Sucess");
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