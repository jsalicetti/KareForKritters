package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.controller;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Applicationdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Userdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.impl.UserServiceImpl;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.User;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ApplicationRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController extends UserServiceImpl {
    public userController(UserRepository userRepository, PasswordEncoder passwordEncoder, ApplicationRepository applicationRepository) {
        super(userRepository, passwordEncoder, applicationRepository);
    }

    @PostMapping("/register")
    public void printData(@RequestBody Userdto user){
        saveUser(user);
        System.out.println("Printing the user data" + user);
    }

    @PostMapping("/sendapplication")
    public void sendApp(@RequestBody Applicationdto application){
        saveApplication(application);
        System.out.println("Printing the application" + application);
    }

    @PostMapping("/Login")
    public User getUser(@RequestBody Userdto user){

        return Login(user.getUserName(),user.getPassword());
    }
}
