package com.example.insomniadiary.domain.sleepdiary;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "SleepDiary_table")
@Getter
@Setter
public class SleepDiary {

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    private String date;
    private String email;
    private int caffeineIntake;
    private int caffeineIntakeTime;
    private int exercise;
    private int exerciseTime;
    private String pill;
    private int pillDosage;
    private int sleepTime;
    private int wakeUpTime;

    public SleepDiary(String date, int caffeineIntake, int caffeineIntakeTime, int exercise, int exerciseTime, String pill, int pillDosage, int sleepTime, int wakeUpTime) {
        this.date = date;
        this.caffeineIntake = caffeineIntake;
        this.caffeineIntakeTime = caffeineIntakeTime;
        this.exercise = exercise;
        this.exerciseTime = exerciseTime;
        this.pill = pill;
        this.pillDosage = pillDosage;
        this.sleepTime = sleepTime;
        this.wakeUpTime = wakeUpTime;
    }

    public SleepDiary() {

    }
}
