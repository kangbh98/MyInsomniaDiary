package com.example.insomniadiary.domain.image;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter@Setter
public class Image {

    private Long Id;
    private String concern;
    private String Dream;
    private String url;


}
