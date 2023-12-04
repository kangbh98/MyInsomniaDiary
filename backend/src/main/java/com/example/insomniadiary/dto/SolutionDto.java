package com.example.insomniadiary.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SolutionDto {
    private int totalData; // 총 데이터 갯수
    private String recentDate; //
    private int averCoffIntake;
    private int averCoffBefBed;
    private int averWorkoutTime;
    private int averWorkoutBefBed;
    private int latestSleep;
    private int bestSleep;
    private int latestCoffIntake;
    private int latestWorkoutTime;
    private int latestWorkoutBefBed;
}
