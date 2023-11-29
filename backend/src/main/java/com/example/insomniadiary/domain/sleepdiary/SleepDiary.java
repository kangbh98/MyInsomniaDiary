package com.example.insomniadiary.domain.sleepdiary;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

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
    private int Exercise;
    private int ExerciseTime;
    private String pill;
    private int pillDosage;
    private int SleepTime;
    private int wakeUpTime;

    public SleepDiary(String date, int caffeineIntake, int caffeineIntakeTime, int exercise, int exerciseTime, String pill, int pillDosage, int sleepTime, int wakeUpTime) {
        this.date = date;
        this.caffeineIntake = caffeineIntake;
        this.caffeineIntakeTime = caffeineIntakeTime;
        this.Exercise = exercise;
        this.ExerciseTime = exerciseTime;
        this.pill = pill;
        this.pillDosage = pillDosage;
        this.SleepTime = sleepTime;
        this.wakeUpTime = wakeUpTime;
    }

    public SleepDiary() {

    }
}
