package com.example.insomniadiary.controller;

import com.example.insomniadiary.domain.sleepdiary.SleepDiaryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class SolutionController {
    private final SleepDiaryRepository sleepDiaryRepository;


}
