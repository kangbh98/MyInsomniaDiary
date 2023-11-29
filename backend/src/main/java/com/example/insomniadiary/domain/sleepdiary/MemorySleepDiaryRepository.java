package com.example.insomniadiary.domain.sleepdiary;


import com.example.insomniadiary.domain.image.Image;
import com.example.insomniadiary.domain.user.User;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;


public class MemorySleepDiaryRepository {
    private Map<Long, SleepDiary> repo = new ConcurrentHashMap<Long, SleepDiary>();
    AtomicLong seq = new AtomicLong(0);



    public SleepDiary save(SleepDiary sleepDiary) {
        sleepDiary.setID(seq.incrementAndGet());
        repo.put(sleepDiary.getID(), sleepDiary);
        return sleepDiary;
    }


    public Optional<SleepDiary> findByID(Long id) {

        return Optional.ofNullable(repo.get(id));
    }


    public Optional<SleepDiary> findByEmailAndDate(String email,String date) {
        return repo.values().stream()
                .filter(sleepDiary -> sleepDiary.getEmail().equals(email) && sleepDiary.getDate().equals(date))
                .findAny();
    }
}