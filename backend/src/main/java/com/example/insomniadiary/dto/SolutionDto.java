package com.example.insomniadiary.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SolutionDto {

    ////////////////////////////////////////////////////////
    private int totalData; // 총 데이터 갯수
    ////////////////////////////////////////////////////////

    private String recentDate; // 가장 최근 날짜의 입력 날짜
    private int latestSleep;// 가장 최근 날짜의 수면 시간
    private int latestCoffIntake; // 가장 최근 날짜의 카페인 섭취량
    private int latestWorkoutTime; // 가장 최근 날짜의 운동 시간
    private int latestWorkoutBefBed; // 가장 최근 날짜의 n시간 전 운동

    //////////////////////////////////////////////////////////

    private double averCoffIntake; //  가장 많이 잔 커피섭취 평균
    private double averWorkoutTime; // 가장 많이 잔 날짜의 운동 시간 평균
    private double averWorkoutBefBed; // 가장 많이 잔 날짜의 n시간전 운동
    private double bestSleep;  // 가장 많이 잔 날짜의 수면 시간

    //////////////////////////////////////////////////////////

    private double TotalAverCoffIntake; //  전체 커피섭취 평균
    private double TotalAverWorkoutTime; // 전체 운동 시간 평균
    private double TotalAverWorkoutBefBed; // 전체 n시간전 운동 평균
    private double TotalBestSleep;  // 전체 수면 시간 평균
}
