package com.example.insomniadiary.domain.sleepdiary;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SleepDiaryRepository extends JpaRepository<SleepDiary,Long> {
    SleepDiary save(SleepDiary sleepDiary);

    Optional<SleepDiary> findByID(Long id);

    Optional<SleepDiary> findByEmailAndDate(String email,String date);

    Optional<SleepDiary> findByDate(String date);

    @Query("SELECT e FROM SleepDiary e WHERE e.date = (SELECT MAX(e2.date) FROM SleepDiary e2)")
    SleepDiary findLatestSleepDiary();

    @Query("SELECT AVG(e.caffeineIntake) FROM SleepDiary e")
    double findTotalAverageCaffeineIntake();

    @Query("SELECT AVG(e.exercise) FROM SleepDiary e")
    double findTotalAverageExercise();

    @Query("SELECT AVG(e.exerciseTime) FROM SleepDiary e")
    double findTotalAverageExerciseTime();

    @Query("SELECT AVG(e.sleepTime) FROM SleepDiary e")
    double findTotalAverageSleepTime();
    @Query("SELECT AVG(e.caffeineIntakeTime) FROM SleepDiary e")
    double findTotalAverageCaffeineIntakeTime();

    long count();


    @Query("SELECT AVG(e.caffeineIntake) FROM SleepDiary e WHERE e.sleepTime = (SELECT MAX(e2.sleepTime) FROM SleepDiary e2)")
    Double findAverageCaffeineIntake();

    @Query("SELECT AVG(e.exercise) FROM SleepDiary e WHERE e.sleepTime = (SELECT MAX(e2.sleepTime) FROM SleepDiary e2)")
    Double findAverageWorkoutTime();

    @Query("SELECT AVG(e.caffeineIntakeTime) FROM SleepDiary e WHERE e.sleepTime = (SELECT MAX(e2.sleepTime) FROM SleepDiary e2)")
    Double findAverageCaffeineIntakeTime();

    @Query("SELECT AVG(e.sleepTime) FROM SleepDiary e WHERE e.sleepTime = (SELECT MAX(e2.sleepTime) FROM SleepDiary e2)")
    Double findAverageBestSleep();

    @Query("SELECT AVG(e.exerciseTime) FROM SleepDiary e WHERE e.sleepTime = (SELECT MAX(e2.sleepTime) FROM SleepDiary e2)")
    Double findAverageWorkoutBefBed();




}
