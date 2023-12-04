package com.example.insomniadiary.controller;

import com.example.insomniadiary.domain.sleepdiary.SleepDiaryRepository;
import com.example.insomniadiary.domain.solution.SolutionService;
import com.example.insomniadiary.domain.user.User;
import com.example.insomniadiary.dto.SolutionDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class SolutionController {
    private final SolutionService solutionService;

    @GetMapping("/recommendation")
    public ResponseEntity<SolutionDto> Solution(@SessionAttribute(name = "loginUser", required = false) User loginUser) {

        SolutionDto solutionDto = new SolutionDto();
        SolutionDto solutionDto1 = solutionService.dataTotal(solutionDto);

        return ResponseEntity.ok(solutionDto1);
    }
}
