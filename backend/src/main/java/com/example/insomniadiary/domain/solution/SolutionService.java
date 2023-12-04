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
        solutionDto.setTotalAverWorkoutBefBed(sleepDiaryRepository.findTotalAverageExerciseTime());
        solutionDto.setTotalAverWorkoutTime(sleepDiaryRepository.findTotalAverageExercise());
        solutionDto.setTotalBestSleep(sleepDiaryRepository.findTotalAverageSleepTime());
        solutionDto.setTotalAverCoffIntake(sleepDiaryRepository.findTotalAverageCaffeineIntake());
        solutionDto.setTotalAverCoffBefBed(sleepDiaryRepository.findTotalAverageCaffeineIntakeTime());
        return solutionDto;
    }

    public SolutionDto dataLastest(SolutionDto solutionDto) {
        SleepDiary latestSleepDiary = sleepDiaryRepository.findLatestSleepDiary();

        solutionDto.setLatestCoffBefBed(latestSleepDiary.getCaffeineIntakeTime());
        solutionDto.setLatestWorkoutTime(latestSleepDiary.getExercise());
        solutionDto.setLatestWorkoutBefBed(latestSleepDiary.getExerciseTime());
        solutionDto.setLatestSleep(latestSleepDiary.getSleepTime());
        solutionDto.setRecentDate(latestSleepDiary.getDate());
        solutionDto.setLatestCoffIntake(latestSleepDiary.getCaffeineIntake());

        return solutionDto;
    }

    public SolutionDto dataBest(SolutionDto solutionDto) {


        solutionDto.setAverCoffIntake(sleepDiaryRepository.findAverageCaffeineIntake());
        solutionDto.setAverWorkoutTime(sleepDiaryRepository.findAverageWorkoutTime());
        solutionDto.setAverCoffBefBed(sleepDiaryRepository.findAverageCaffeineIntakeTime());
        solutionDto.setBestSleep(sleepDiaryRepository.findAverageBestSleep());
        solutionDto.setAverWorkoutBefBed(sleepDiaryRepository.findAverageWorkoutBefBed());

        return solutionDto;
    }
}