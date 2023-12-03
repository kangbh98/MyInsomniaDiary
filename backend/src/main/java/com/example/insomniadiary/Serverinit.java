package com.example.insomniadiary;

import com.example.insomniadiary.domain.image.Image;
import com.example.insomniadiary.domain.image.ImageRepository;
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
    private final ImageRepository imageRepository;

    @Override
    public void run(String[] args) throws Exception{
        userDataInit();
        SleepDiaryDataInit();
    }

    private void userDataInit() {
        User user = new User("admin", "admin", "정우성", 24, 72);
        userRepository.save(user);
        System.out.println("user = " + user);
        SleepImageInit();
    }

    private void SleepDiaryDataInit() {
        SleepDiary sleepDiary = new SleepDiary("2023-11-30",100,19,3,17,"zolpidem",1,8,7);
        SleepDiary sleepDiary2 = new SleepDiary("2023-11-16",100,19,3,17,"zolpidem",1,8,7);
        SleepDiary sleepDiary3 = new SleepDiary("2023-11-14",100,19,3,17,"zolpidem",1,8,7);
        sleepDiaryRepository.save(sleepDiary);
        sleepDiaryRepository.save(sleepDiary2);
        sleepDiaryRepository.save(sleepDiary3);
        System.out.println("sleepDiary = " + sleepDiary);
    }

    private void SleepImageInit(){
        Image image = new Image("2023-11-30","i SEE BIG MOUNTAION IN MY DREAM","file:///C:/Users/user/Desktop/68139f4cd48c1148003b594fe1da8ce5.jpg");
        imageRepository.save(image);
    }
}
