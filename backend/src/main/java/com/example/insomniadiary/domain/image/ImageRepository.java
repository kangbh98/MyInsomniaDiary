package com.example.insomniadiary.domain.image;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {
    Image save(Image image);

    Optional<Image> findByID(Long id);

    Optional<Image> findByEmailAndDate(String email,String date);

    Optional<Image> findByDate(String date);
}
