package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer ID;
    @Column(name = "What type of pet are you interested in adopting?", nullable = false)
    String inquireAdopt;
    @Column(name = "Have you adopted from us before?", nullable = false)
    String adoptedBefore;
    @Column(name = "What is your living situation?", nullable = false)
    String livingSituation;
    @Column(name = "Do you rent or own?", nullable = false)
    String rentOwn;
    @Column(name = "Do you have a fenced yard?", nullable = false)
    String fencedYard;
    @Column(name = "Do you live alone?", nullable = false)
    String liveAlone;
    @Column(name = "Do you live with children?", nullable = false)
    String liveChildren;
    @Column(name = "Does anyone in your household have allergies?", nullable = false)
    String homeAllergies;
    @Column(name = "How will you exercise your pet?", nullable = false)
    String exercisePet;
    @Column(name = "What are your training plans for your pet?", nullable = false)
    String trainingPet;
    @Column(name = "How many pets currently live in your household?", nullable = false)
    Integer petsAtHome;
    @Column(name = "Who will be responsible for caring for your pet?", nullable = false)
    String carePet;
    @Column(name = "How many hours will the pet be left alone during the day?", nullable = false)
    String hoursHome;
}






















