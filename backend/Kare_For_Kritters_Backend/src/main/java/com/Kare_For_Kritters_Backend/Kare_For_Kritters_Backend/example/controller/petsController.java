package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.controller;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.impl.UserServiceImpl;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Pets;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ApplicationRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.PetsRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ProfileRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.UserRepository;
import org.antlr.v4.runtime.tree.pattern.ParseTreePattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class petsController extends UserServiceImpl {

    @Autowired
    PetsRepository petsRepository;

    public petsController(UserRepository userRepository, PasswordEncoder passwordEncoder, ApplicationRepository applicationRepository) {
        super(userRepository, passwordEncoder, applicationRepository);
    }

    @GetMapping("/pets")
    public List<Pets> getAll(){

        return petsRepository.findAll();
    }

}
