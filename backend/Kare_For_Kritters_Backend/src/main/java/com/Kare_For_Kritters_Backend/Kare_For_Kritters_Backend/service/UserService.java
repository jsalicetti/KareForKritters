package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.service;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.User;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Userdto;
public interface UserService {
    void saveUser(Userdto userDto);
}
