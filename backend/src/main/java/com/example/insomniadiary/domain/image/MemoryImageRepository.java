package com.example.insomniadiary.domain.image;

import com.example.insomniadiary.domain.sleepdiary.SleepDiary;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;



public class MemoryImageRepository {

    private Map<Long, Image> repo = new ConcurrentHashMap<Long, Image>();
    AtomicLong seq = new AtomicLong(0);



    public Image save(Image image) {
        image.setID(seq.incrementAndGet());
        repo.put(image.getID(), image);
        return image;
    }


    public Optional<Image> findByID(Long id) {
        return Optional.ofNullable(repo.get(id));
    }


    public Optional<Image> findByEmailAndDate(String email, String date) {
        return repo.values().stream()
                .filter(image -> image.getEmail().equals(email) && image.getDate().equals(date))
                .findAny();
    }
}