package com.example.insomniadiary.domain.sleepdiary;


import com.example.insomniadiary.domain.image.Image;
import org.springframework.stereotype.Repository;

import java.util.Optional;


public interface SleepDiaryRepository {
    SleepDiary save(SleepDiary sleepDiary);

    Optional<SleepDiary> findByID(Long id);

    Optional<SleepDiary> findByEmailAndDate(String email,String date);

}
