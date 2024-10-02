package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String fullName;
    String pronouns;
    String phoneNumber;
    String email;
    String address;
    String city;
    String state;
    Integer zipCode;
}
