package com.example.insomniadiary;

import com.example.insomniadiary.domain.sleepdiary.SleepDiary;
import com.example.insomniadiary.domain.sleepdiary.SleepDiaryRepository;
import com.example.insomniadiary.domain.user.User;
import com.example.insomniadiary.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Serverinit implements CommandLineRunner {

    private final UserRepository userRepository;
    private final SleepDiaryRepository sleepDiaryRepository;

    @Override
    public void run(String[] args) throws Exception{
        userDataInit();
        SleepDiaryDataInit();
    }

    private void userDataInit() {
        User user = new User("admin", "admin", "정우성", 24, 72);
        userRepository.save(user);
        System.out.println("user = " + user);
    }

    private void SleepDiaryDataInit() {
        SleepDiary sleepDiary = new SleepDiary("2023-11-30",100,19,3,17,"zolpidem",1,8,7);
        sleepDiaryRepository.save(sleepDiary);
        System.out.println("sleepDiary = " + sleepDiary);
    }
}
