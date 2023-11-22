package com.example.insomniadiary.domain.sleepdiary;


import java.util.Optional;

public interface SleepDiaryRepository {
    SleepDiary save(SleepDiary sleepDiary);

    Optional<SleepDiary> findByID(Long id);
}
