package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.impl;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Userdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.User;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.UserRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void saveUser(Userdto userDto) {
        User user = new User();

        user.setUserName(userDto.getUserName());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(user);
    }

    public User findUserByEmail(String Email){
        List<User> Users = userRepository.findAll();
        User user = Users.stream().filter(Temp -> Temp.getEmail().equals(Email)).findFirst().get();
        return user;
    }

    public User Login(String Email, String Password){
        User user = findUserByEmail(Email);

        if(passwordEncoder.matches(Password, user.getPassword())){
            System.out.println("Login Successful");
            return user;
        }
        return null;
    }
}
