package com.example.insomniadiary.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepDiaryDto {
    private String date;
    private int caffeineIntake;
    private int caffeineIntakeTime;
    private int exercise;
    private int exerciseTime;
    private String pill;
    private int pillDosage;
    private int sleepTime;
    private int wakeUpTime;
    // 생성자, getter, setter 등 필요한 메서드 추가
}
