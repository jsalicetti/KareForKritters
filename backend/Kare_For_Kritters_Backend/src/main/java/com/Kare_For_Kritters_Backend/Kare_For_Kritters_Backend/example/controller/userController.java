package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.controller;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Userdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.impl.UserServiceImpl;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.User;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController extends UserServiceImpl {
    public userController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        super(userRepository, passwordEncoder);
    }

    @PostMapping("/register")
    public void printData(@RequestBody Userdto user){
        saveUser(user);
        System.out.println("Printing the user data" + user);
    }

    @PostMapping("/Login")
    public User getUser(@RequestBody Userdto user){

        return Login(user.getEmail(),user.getPassword());
    }
}
