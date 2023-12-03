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
    private int bedTime;

    public Diarydto(SleepDiary sleepDiary, Image image) {
        this.sleepDiary = sleepDiary;
        this.image = image;
        bedTimeCalculate(sleepDiary);

    }

    private void bedTimeCalculate(SleepDiary sleepDiary) {
        int wakeUpTime = sleepDiary.getWakeUpTime();
        int sleepTime = sleepDiary.getSleepTime();
        int i = wakeUpTime - sleepTime;
        if(i>0){
            bedTime = i;
        } else if (i<0) {
            bedTime = 24+i;
        }
    }
}
