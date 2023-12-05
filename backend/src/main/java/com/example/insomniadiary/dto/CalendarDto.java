package com.example.insomniadiary.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CalendarDto {
    private String date;
    private int SleepTime;

    public CalendarDto(String date, int sleepTime) {
        this.date = date;
        SleepTime = sleepTime;
    }
}
