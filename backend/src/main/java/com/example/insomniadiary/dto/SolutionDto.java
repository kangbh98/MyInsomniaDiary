package com.example.insomniadiary.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SolutionDto {
    private int totalData; // 총 데이터 갯수
    private String recentDate; // 가장 최근 입력 날짜
    private int averCoffIntake; // 카페인 섭취량 전체 평균
    private int averCoffBefBed; //
    private int averWorkoutTime; // 운동 시간 전체 평균
    private int averWorkoutBefBed; //
    private int latestSleep;
    private int bestSleep;
    private int latestCoffIntake;
    private int latestWorkoutTime;
    private int latestWorkoutBefBed;
}
