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
    @Column(name = "name", nullable = false)
    String name;
    @Column(name = "age", nullable = false)
    Integer age;
    @Column(name = "breed", nullable = false)
    String breed;
    @Column(name = "uid", nullable = false)
    Integer uid;
}


