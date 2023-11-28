package com.example.insomniadiary.domain.image;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter@Setter
public class Image {

    private Long Id;
    private String email;
    private String date;
    private String Prompt;
    private String url;

    public Image(String prompt) {
        Prompt = prompt;
    }

    public Image() {
    }
}
