package com.example.insomniadiary.domain.solution;

import com.example.insomniadiary.domain.sleepdiary.SleepDiary;
import com.example.insomniadiary.domain.sleepdiary.SleepDiaryRepository;
import com.example.insomniadiary.dto.SolutionDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public SolutionDto calculateAverageSleepTimeByExerciseGroup(SolutionDto solutionDto) {
        double[] averageSleepTimes = new double[4];

        averageSleepTimes[0] = calculateAverageSleepTime(0, 2);
        averageSleepTimes[1] = calculateAverageSleepTime(2, 4);
        averageSleepTimes[2] = calculateAverageSleepTime(4, 6);
        averageSleepTimes[3] = calculateAverageSleepTime(6, 8);

        solutionDto.setSleeAverByWorkoutTime1(averageSleepTimes);

        return solutionDto;
    }
    public SolutionDto  calculateAverageSleepTimeByExerciseTimeGroup(SolutionDto solutionDto) {
        double[] averageSleepTimes = new double[4];

        averageSleepTimes[0] = calculateAverageSleepTime(0, 3);
        averageSleepTimes[1] = calculateAverageSleepTime(3, 6);
        averageSleepTimes[2] = calculateAverageSleepTime(6, 9);
        averageSleepTimes[3] = calculateAverageSleepTime(9, 12);

        solutionDto.setSleeAverByWorkoutBefBed1(averageSleepTimes);

        return solutionDto;
    }

    private double calculateAverageSleepTime(int start, int end) {
        List<SleepDiary> sleepDiaries = sleepDiaryRepository.findByExerciseBetween(start, end);

        if (sleepDiaries.isEmpty()) {
            return 0.0; // 또는 다른 기본값을 설정하세요.
        }

        double totalSleepTime = 0.0;
        for (SleepDiary sleepDiary : sleepDiaries) {
            totalSleepTime += sleepDiary.getSleepTime();
        }

        return totalSleepTime / sleepDiaries.size();
    }

    private double calculateAverageSleepTime2(int start, int end) {
        List<SleepDiary> sleepDiaries = sleepDiaryRepository.findByExerciseTimeBetween(start, end);

        if (sleepDiaries.isEmpty()) {
            return 0.0; // 또는 다른 기본값을 설정하세요.
        }

        double totalSleepTime = 0.0;
        for (SleepDiary sleepDiary : sleepDiaries) {
            totalSleepTime += sleepDiary.getSleepTime();
        }

        return totalSleepTime / sleepDiaries.size();
    }

}