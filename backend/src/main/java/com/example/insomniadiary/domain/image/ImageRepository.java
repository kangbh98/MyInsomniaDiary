package com.example.insomniadiary.domain.image;

import java.util.Optional;

public interface ImageRepository {
    Image save(Image image);

    Optional<Image> findByID(Long id);
}
