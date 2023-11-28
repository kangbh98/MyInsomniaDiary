package com.example.insomniadiary.domain.image;

import com.example.insomniadiary.domain.sleepdiary.SleepDiary;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;


@Repository
public class MemoryImageRepository implements ImageRepository {

    private Map<Long, Image> repo = new ConcurrentHashMap<Long, Image>();
    AtomicLong seq = new AtomicLong(0);


    @Override
    public Image save(Image image) {
        image.setId(seq.incrementAndGet());
        repo.put(image.getId(), image);
        return image;
    }

    @Override
    public Optional<Image> findByID(Long id) {
        return Optional.ofNullable(repo.get(id));
    }

    @Override
    public Optional<Image> findByEmailAndDate(String email, String date) {
        return repo.values().stream()
                .filter(image -> image.getEmail().equals(email) && image.getDate().equals(date))
                .findAny();
    }
}