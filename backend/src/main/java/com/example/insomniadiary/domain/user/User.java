package com.example.insomniadiary.domain.user;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "User_table")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    private String email;
    private String password;
    private String username;
    private int age;
    private double weigh;

    public User(String email, String password, String username, int age, double weigh) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.age = age;
        this.weigh = weigh;
    }

    public User() {
    }
}