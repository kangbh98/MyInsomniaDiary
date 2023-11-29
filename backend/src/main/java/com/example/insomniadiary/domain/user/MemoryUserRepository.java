package com.example.insomniadiary.domain.user;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;


public class MemoryUserRepository  {
    Map<Long, User> repo = new ConcurrentHashMap<>();
    AtomicLong seq = new AtomicLong(0);

    public User save(User user) {
        user.setID(seq.incrementAndGet());
        repo.put(user.getID(), user);
        return user;
    }

    public Optional<User> findById(Long id) {
        return Optional.ofNullable(repo.get(id));
    }




    public Optional<User> findByEmail(String email) {
        return repo.values().stream()
                .filter(user -> user.getEmail().equals(email))
                .findAny();
    }

    public List<User> findAll() {
        return new ArrayList<>(repo.values());
    }
}