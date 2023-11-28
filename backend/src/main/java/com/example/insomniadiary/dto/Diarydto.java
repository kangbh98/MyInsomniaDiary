package com.example.insomniadiary.dto;

import com.example.insomniadiary.domain.image.Image;
import com.example.insomniadiary.domain.sleepdiary.SleepDiary;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Diarydto {
    private SleepDiary sleepDiary;
    private Image image;

    public Diarydto(SleepDiary sleepDiary, Image image) {
        this.sleepDiary = sleepDiary;
        this.image = image;
    }
}
