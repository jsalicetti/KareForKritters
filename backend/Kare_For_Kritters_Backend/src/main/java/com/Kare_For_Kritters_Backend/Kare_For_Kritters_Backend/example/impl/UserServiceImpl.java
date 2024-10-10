package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.impl;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Applicationdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Petsdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Userdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Application;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Pets;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.User;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ApplicationRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.UserRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder; // hashing
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

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


    public void savePets(Petsdto petsdto){
        Pets pets = new Pets();

        pets.setName(petsdto.getName());
        pets.setAge(petsdto.getAge());
        pets.setBreed(petsdto.getBreed());
        pets.setFunFact(petsdto.getFunFact());
        pets.setSex(petsdto.getSex());
        pets.setDescription(petsdto.getDescription());
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

    public void saveApplication(Application application){


        applicationRepository.save(application);
    }

    public User findUserByEmail(String Email){
        List<User> Users = userRepository.findAll();
        User user = Users.stream().filter(Temp -> Temp.getEmail().equals(Email)).findFirst().get();
        return user;
    }

    public User findUserByUsername(String userName){
        List<User> Users = userRepository.findAll();

        Optional<User> user = Users.stream().filter(Temp -> Temp.getUserName().equals(userName)).findFirst();
        return user.orElse(null);
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
