package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.controller;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Applicationdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Userdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.impl.UserServiceImpl;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Application;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Profile;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.User;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ApplicationRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ProfileRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController extends UserServiceImpl {

    @Autowired
    ProfileRepository profileRepository;
    public userController(UserRepository userRepository, PasswordEncoder passwordEncoder, ApplicationRepository applicationRepository, ProfileRepository profileRepository) {
        super(userRepository, passwordEncoder, applicationRepository);
        this.profileRepository = profileRepository;
    }

    @PostMapping("/register")
    public void printData(@RequestBody Userdto user){
        saveUser(user);
        System.out.println("Printing the user data" + user);
    }

    @PostMapping("/sendapplication")
    public void sendApp(@RequestBody Application application){
        saveApplication(application);
        System.out.println("Printing the application" + application);
    }

    @PostMapping("/Login")
    public User getUser(@RequestBody Userdto user){
        System.out.println("Printing the user data" + user);
        return Login(user.getUserName(),user.getPassword());
    }

    @PostMapping("/profile")
    public void setProfile(@RequestBody Profile profile){
        profileRepository.save(profile);
    }
}
