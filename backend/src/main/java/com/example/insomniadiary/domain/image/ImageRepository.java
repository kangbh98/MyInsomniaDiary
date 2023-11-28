package com.example.insomniadiary.domain.image;

import com.example.insomniadiary.domain.user.User;

import java.util.Optional;

public interface ImageRepository {
    Image save(Image image);

    Optional<Image> findByID(Long id);

    Optional<Image> findByEmailAndDate(String email,String date);
}
