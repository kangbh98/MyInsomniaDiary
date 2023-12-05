package com.example.insomniadiary.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CalendarDto {
    private String date;
    private int sleepTime;

    public CalendarDto(String date, int sleepTime) {
        this.date = date;
        this.sleepTime = sleepTime;
    }
}
