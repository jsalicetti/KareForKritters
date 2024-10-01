package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.impl;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Applicationdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Userdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Application;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.User;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ApplicationRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.UserRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private ApplicationRepository applicationRepository;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, ApplicationRepository applicationRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.applicationRepository = applicationRepository;
    }

    @Override
    public void saveUser(Userdto userDto) {
        User user = new User();

        user.setUserName(userDto.getUserName());
        user.setEmail(userDto.getEmail());
        user.setRoles(userDto.getRoles());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(user);
    }

    public void saveApplication(Applicationdto application){
        Application Newapplication = new Application();

        Newapplication.setInquireAdopt((application.getInquireAdopt()));
        Newapplication.setAdoptedBefore((application.getAdoptedBefore()));
        Newapplication.setLivingSituation((application.getLivingSituation()));
        Newapplication.setRentOwn((application.getRentOwn()));
        Newapplication.setFencedYard((application.getFencedYard()));
        Newapplication.setLiveAlone((application.getLiveAlone()));
        Newapplication.setLiveChildren((application.getLiveChildren()));
        Newapplication.setHomeAllergies((application.getHomeAllergies()));
        Newapplication.setExercisePet((application.getExercisePet()));
        Newapplication.setTrainingPet((application.getTrainingPet()));
        Newapplication.setPetsAtHome((application.getPetsAtHome()));
        Newapplication.setCarePet((application.getCarePet()));
        Newapplication.setHoursHome((application.getHoursHome()));

        applicationRepository.save(Newapplication);
    }

    public User findUserByEmail(String Email){
        List<User> Users = userRepository.findAll();
        User user = Users.stream().filter(Temp -> Temp.getEmail().equals(Email)).findFirst().get();
        return user;
    }

    public User findUserByUsername(String userName){
        List<User> Users = userRepository.findAll();
        User user = Users.stream().filter(Temp -> Temp.getUserName().equals(userName)).findFirst().get();
        return user;
    }

    public User Login(String userName, String Password){
        User user = findUserByUsername(userName);

        if(passwordEncoder.matches(Password, user.getPassword())){
            System.out.println("Login Successful");
            return user;
        }
        return null;
    }
}
