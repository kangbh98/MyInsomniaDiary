package com.example.insomniadiary.domain.sleepdiary;


import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SleepDiaryRepository {
    SleepDiary save(SleepDiary sleepDiary);

    Optional<SleepDiary> findByID(Long id);
}
