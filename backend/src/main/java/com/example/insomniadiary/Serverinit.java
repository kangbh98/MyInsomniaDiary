package com.example.insomniadiary;

import com.example.insomniadiary.domain.user.User;
import com.example.insomniadiary.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Serverinit implements CommandLineRunner {

    private final UserRepository userRepository;

    @Override
    public void run(String[] args) throws Exception{
        User user = new User("admin", "admin", "정우성", 24, 72);
        userRepository.save(user);
        System.out.println("user = " + user);
    }
}
