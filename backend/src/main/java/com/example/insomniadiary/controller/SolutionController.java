package com.example.insomniadiary.controller;
import com.example.insomniadiary.domain.solution.SolutionService;
import com.example.insomniadiary.domain.user.User;
import com.example.insomniadiary.dto.SolutionDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class SolutionController {
    private final SolutionService solutionService;

    @GetMapping("/recommendation")
    public ResponseEntity<SolutionDto> Solution(@SessionAttribute(name = "loginUser", required = false) User loginUser) {

        SolutionDto solutionDto = new SolutionDto();
        SolutionDto solutionDto1 = solutionService.dataTotal(solutionDto);
        SolutionDto solutionDto2 = solutionService.dataAverage(solutionDto1);
        SolutionDto solutionDto3 = solutionService.dataBest(solutionDto2);
        SolutionDto solutionDto4 = solutionService.dataLastest(solutionDto3);

        return ResponseEntity.ok(solutionDto4);
    }
}
