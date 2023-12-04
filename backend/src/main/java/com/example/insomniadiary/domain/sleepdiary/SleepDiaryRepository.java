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


    long count();
//    @Query("SELECT DISTINCT SleepDiary.date FROM SleepDiary WHERE SUBSTRING(SleepDiary.date, 1, 7) = :yearMonth")
//    List<String> findDatesByYearAndMonth(@Param("yearMonth") String yearMonth);

}
