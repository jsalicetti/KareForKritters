package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class Userdto {


    private Integer UID;
    private String Roles;

    private String Email;
    private String Password;
    private String UserName;

}
