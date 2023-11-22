package com.example.insomniadiary.controller;

import com.example.insomniadiary.domain.image.Image;
import com.example.insomniadiary.domain.image.ImageRepository;
import com.theokanning.openai.image.CreateImageRequest;
import com.theokanning.openai.service.OpenAiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Slf4j
@Controller
@RequiredArgsConstructor
public class ImageController {

    private final ImageRepository imageRepository;

    @GetMapping("/generate")
    public String generateForm(Model model) {
        model.addAttribute("image", new Image());
        return "features/generator";
    }

    @PostMapping("/result")
    public String generate(@ModelAttribute Image image, Model model) {
        log.info("Image generated: {}", image);

        String imageUrl = openAiImageUrl(image);
        image.setUrl(imageUrl);
        imageRepository.save(image);

        model.addAttribute("imageUrl", imageUrl);
        return "features/result";
    }

    private static String openAiImageUrl(Image imageToRequest) {
        OpenAiService service = new OpenAiService("token");
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