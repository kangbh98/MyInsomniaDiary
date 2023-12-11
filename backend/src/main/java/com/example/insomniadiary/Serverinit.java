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
        SleepDiary sleepDiary = new SleepDiary("2023-11-30",150,20,0,24,"zolpidem",1,3,7);
//        SleepDiary sleepDiary2 = new SleepDiary("2023-11-16",100,19,3,17,"zolpidem",1,7,7);
//        SleepDiary sleepDiary3 = new SleepDiary("2023-11-14",200,17,1,18,"zolpidem",1,5,8);
//        SleepDiary sleepDiary4 = new SleepDiary("2023-11-12",0,0,4,20,"zolpidem",1,10,8);
//        SleepDiary sleepDiary5 = new SleepDiary("2023-11-3",250,23,0,0,"zolpidem",1,1,8);
        sleepDiaryRepository.save(sleepDiary);
//        sleepDiaryRepository.save(sleepDiary2);
//        sleepDiaryRepository.save(sleepDiary3);
//        sleepDiaryRepository.save(sleepDiary4);
//        sleepDiaryRepository.save(sleepDiary5);
//        System.out.println("sleepDiary = " + sleepDiary);
    }

    private void SleepImageInit(){
        Image image = new Image("2023-11-30","i SEE BIG MOUNTAION IN MY DREAM","https://assets-global.website-files.com/5e6aa3e3f001fae105b8e1e7/6377fb28359e1d03cb6f7567_forest.jpeg");
//        Image image2 = new Image("2023-11-16","i SEE BIG MOUNTAION IN MY DREAM","https://images.nightcafe.studio/jobs/en0lXKMVXGaE6X4cJ8v6/en0lXKMVXGaE6X4cJ8v6--1--2yx26.jpg?tr=w-1600,c-at_max");
//        Image image3 = new Image("2023-11-14","i SEE BIG MOUNTAION IN MY DREAM","https://preview.redd.it/my-first-collection-of-dalle-2-arts-v0-yrv5an0bp76b1.png?width=512&format=png&auto=webp&s=9b93ccd0af6b7b4e8db49534f034075951b3118f");
        imageRepository.save(image);
//        imageRepository.save(image2);
//        imageRepository.save(image3);
    }
}