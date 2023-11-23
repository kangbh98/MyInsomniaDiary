package com.example.insomniadiary.domain.user;

import lombok.Data;

@Data
public class User {

    private Long id;
    private String email;
    private String password;
    private String username;
    private int age;

    public User() {
    }

    private double weigh;

    public User(Long id, String email, String password, String username, int age, double weigh) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.age = age;
        this.weigh = weigh;
    }

}