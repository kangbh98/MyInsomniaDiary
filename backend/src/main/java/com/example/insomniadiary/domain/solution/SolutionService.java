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

    public SolutionDto dataTotal(SolutionDto solutionDto) {
        long count = sleepDiaryRepository.count();
        solutionDto.setTotalData((int) count);

        return solutionDto;
    }

    public SolutionDto dataAverage(SolutionDto solutionDto) {
        sleepDiaryRepository.findAverageExerciseTime();
        sleepDiaryRepository.findAverageExercise();
        sleepDiaryRepository.findAverageSleepTime();
        sleepDiaryRepository.findAverageCaffeineIntake();
        return solutionDto;
    }

    public SolutionDto dataLastest(SolutionDto solutionDto) {
        SleepDiary latestSleepDiary = sleepDiaryRepository.findLatestSleepDiary();
        solutionDto.setLatestCoffIntake(latestSleepDiary.getCaffeineIntake());
        solutionDto.setLatestWorkoutTime(latestSleepDiary.getExercise());
        solutionDto.setLatestWorkoutBefBed(latestSleepDiary.getExerciseTime());
        solutionDto.setLatestSleep(latestSleepDiary.getSleepTime());

        return solutionDto;
    }
}
