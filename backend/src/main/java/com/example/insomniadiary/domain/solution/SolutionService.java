package com.example.insomniadiary.domain.solution;

import com.example.insomniadiary.domain.sleepdiary.SleepDiary;
import com.example.insomniadiary.domain.sleepdiary.SleepDiaryRepository;
import com.example.insomniadiary.dto.SolutionDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SolutionService {
    private final SleepDiaryRepository sleepDiaryRepository;

    public SolutionDto dataTotalAndNum(SolutionDto solutionDto) {
        String latestDateString = sleepDiaryRepository.findLatestDateString();
        long count = sleepDiaryRepository.count();
        solutionDto.setRecentDate(latestDateString);
        solutionDto.setTotalData((int) count);

        return solutionDto;
    }
}
