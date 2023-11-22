package com.example.insomniadiary.domain.sleepdiary;


import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;


public class MemorySleepDiaryRepository implements SleepDiaryRepository{
    private Map<Long, SleepDiary> repo = new ConcurrentHashMap<Long, SleepDiary>();
    AtomicLong seq = new AtomicLong(0);


    @Override
    public SleepDiary save(SleepDiary sleepDiary) {
        sleepDiary.setId(seq.incrementAndGet());
        repo.put(sleepDiary.getId(), sleepDiary);
        return sleepDiary;
    }

    @Override
    public Optional<SleepDiary> findByID(Long id) {

        return Optional.ofNullable(repo.get(id));
    }
}