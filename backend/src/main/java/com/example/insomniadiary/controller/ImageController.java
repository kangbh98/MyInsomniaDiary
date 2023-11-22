package com.example.insomniadiary.controller;

import com.example.insomniadiary.domain.image.ImageRepository;
import com.example.insomniadiary.domain.image.Image;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

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
    public String generate(@ModelAttribute Image image) {
        log.info("Image generated: {}", image);
        imageRepository.save(image);
        return null;
    }
}