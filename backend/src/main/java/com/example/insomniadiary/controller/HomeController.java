package com.example.insomniadiary.controller;

import com.example.insomniadiary.domain.image.Image;
import com.example.insomniadiary.domain.image.ImageRepository;
import com.example.insomniadiary.domain.sleepdiary.SleepDiary;
import com.example.insomniadiary.domain.sleepdiary.SleepDiaryRepository;
import com.example.insomniadiary.domain.user.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    private final ImageRepository imageRepository;
    private final SleepDiaryRepository sleepDiaryRepository;

    @GetMapping("/home")
    public ResponseEntity<String> home(
            @SessionAttribute(name = "loginUser", required = false) User loginUser,
            @RequestParam String date){

        Optional<SleepDiary> byDate = sleepDiaryRepository.findByDate(date);
        if (!byDate.isPresent()) {
            return ResponseEntity.ok("1");
        }else {
            return ResponseEntity.ok("2");
        }
    }
}
