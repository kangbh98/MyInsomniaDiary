package com.example.insomniadiary.controller;


import com.example.insomniadiary.domain.image.ImageRepository;
import com.example.insomniadiary.domain.sleepdiary.SleepDiary;
import com.example.insomniadiary.domain.sleepdiary.SleepDiaryRepository;
import com.example.insomniadiary.domain.user.User;
import com.example.insomniadiary.dto.HomeDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class HomeController {

    private final ImageRepository imageRepository;
    private final SleepDiaryRepository sleepDiaryRepository;

    @GetMapping("/home")
    public ResponseEntity<HomeDto> home(
            @SessionAttribute(name = "loginUser", required = false) User loginUser,
            @RequestParam String date){


        Optional<SleepDiary> byDate = sleepDiaryRepository.findByDate(date);
        HomeDto homeDto = new HomeDto();
        if (!byDate.isPresent()) {
            homeDto.setStringg("2");;
        }else {
            homeDto.setStringg("1");
        }
        return ResponseEntity.ok(homeDto);
    }
}
