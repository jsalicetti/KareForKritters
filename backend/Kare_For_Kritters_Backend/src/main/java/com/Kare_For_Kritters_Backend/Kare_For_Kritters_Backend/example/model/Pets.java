package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Pets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer petID;
    @Column(name = "name")
    String name;
    @Column(name = "age")
    String age;
    @Column(name = "breed" )
    String breed;
    @Column(name = "uid")
    Integer uid;
    @Column (name = "funFact")
    String funFact;
    @Column (name = "sex")
    String sex;
    @Column (name = "description")
    String description;
    @Column (name= "favoriteToy")
    String favoriteToy;
    @Column (name = "story", length = 5000)
    String story;
}


