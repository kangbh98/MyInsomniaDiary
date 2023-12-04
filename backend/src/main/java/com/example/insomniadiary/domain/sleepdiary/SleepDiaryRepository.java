package com.example.insomniadiary.domain.sleepdiary;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SleepDiaryRepository extends JpaRepository<SleepDiary,Long> {
    SleepDiary save(SleepDiary sleepDiary);

    Optional<SleepDiary> findByID(Long id);

    Optional<SleepDiary> findByEmailAndDate(String email,String date);

    Optional<SleepDiary> findByDate(String date);

    @Query("SELECT e FROM SleepDiary e ORDER BY STR_TO_DATE(e.date, '%Y-%m-%d') DESC")
    SleepDiary findLatestSleepDiary();

    @Query("SELECT AVG(e.caffeineIntake) FROM SleepDiary e")
    double findAverageCaffeineIntake();

    @Query("SELECT AVG(e.Exercise) FROM SleepDiary e")
    double findAverageExercise();

    @Query("SELECT AVG(e.ExerciseTime) FROM SleepDiary e")
    double findAverageExerciseTime();

    @Query("SELECT AVG(e.SleepTime) FROM SleepDiary e")
    double findAverageSleepTime();
    @Query("SELECT AVG(e.caffeineIntakeTime) FROM SleepDiary e")
    double findAverageCaffeineIntakeTime();

    long count();

    // SleepTime이 가장 높은 레코드들의 평균 커피섭취량, 운동시간, 운동 전 커피섭취량, 수면 시간, 수면 전 커피섭취량을 구하는 쿼리
    @Query("SELECT " +
            "AVG(e.caffeineIntake) AS averCoffIntake, " +
            "AVG(e.ExerciseTime) AS averWorkoutTime, " +
            "AVG(e.caffeineIntakeTime) AS averCoffBefBed, " +
            "AVG(e.SleepTime) AS bestSleep, " +
            "AVG(e.ExerciseTime) AS averWorkoutBefBed " +
            "FROM SleepDiary e " +
            "WHERE e.SleepTime = (SELECT MAX(e2.SleepTime) FROM SleepDiary e2)")
    Object[] findAveragesOfHighestSleepTimeRecords();



}
