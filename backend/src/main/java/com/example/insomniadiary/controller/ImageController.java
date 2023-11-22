package com.example.insomniadiary.controller;

import com.example.insomniadiary.domain.image.Image;
import com.example.insomniadiary.domain.image.ImageRepository;
import com.theokanning.openai.image.CreateImageRequest;
import com.theokanning.openai.service.OpenAiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ImageController {

    private final ImageRepository imageRepository;

    @PostMapping("/generate")
    public String generateForm(Model model) {
        model.addAttribute("image", new Image());
        return null;
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
        OpenAiService service = new OpenAiService("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");
        CreateImageRequest createImageRequest = CreateImageRequest.builder()
                .prompt(imageToRequest.getConcern()+imageToRequest.getConcern())
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