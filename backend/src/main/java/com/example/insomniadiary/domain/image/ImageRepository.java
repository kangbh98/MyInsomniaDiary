package com.example.insomniadiary.domain.image;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {
    Image save(Image image);

    Optional<Image> findByid(Long id);

    Optional<Image> findByEmailAndDate(String email,String date);
}
