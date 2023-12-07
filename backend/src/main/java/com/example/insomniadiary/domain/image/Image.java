package com.example.insomniadiary.domain.image;


import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;
import org.w3c.dom.Text;

@Entity
@Table(name = "Image_table")
@Getter
@Setter
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    private String email;
    private String date;

    @Column(length = 500)
    private String Prompt;


    public Image() {
    }

    public Image(String date, String prompt, String url) {
        this.date = date;
        this.Prompt = prompt;
        this.url = url;
    }

    @Column(length = 500)
    private String url;

}
