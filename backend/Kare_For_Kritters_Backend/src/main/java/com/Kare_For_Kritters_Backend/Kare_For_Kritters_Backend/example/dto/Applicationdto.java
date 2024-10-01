package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class Applicationdto {


    private Integer ID;
    private String inquireAdopt;
    private String adoptedBefore;
    private String livingSituation;
    private String rentOwn;
    private String fencedYard;
    private String liveAlone;
    private String liveChildren;
    private String homeAllergies;
    private String exercisePet;
    private String trainingPet;
    private Integer petsAtHome;
    private String carePet;
    private String hoursHome;
}
