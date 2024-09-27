package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer ID;
    @Column(name = "admin", nullable = false)
    String admin;
    @Column(name = "user", nullable = false)
    Integer user;
    @Column(name = "uid", nullable = false)
    Integer uid;
}
