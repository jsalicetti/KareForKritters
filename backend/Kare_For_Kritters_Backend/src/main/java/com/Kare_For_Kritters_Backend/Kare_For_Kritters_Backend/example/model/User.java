package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer UID;
    @Column(name = "UserName" ,nullable = false)
    String UserName;
    @Column(name = "email" ,nullable = false, unique = true)
    String email;
    @Column(name = "password" ,nullable = false)
    String password;
    @Column(name= "roles")
    String roles;
//

    public User(Integer UID, String userName, String email, String password, String roles) {
        this.UID = UID;
        UserName = userName;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}

