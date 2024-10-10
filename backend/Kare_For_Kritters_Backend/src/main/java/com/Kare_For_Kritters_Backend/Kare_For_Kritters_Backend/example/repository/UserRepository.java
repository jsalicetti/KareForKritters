package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User,Long> {
    User findByUID(Integer UID);
    User findByUserName(String userName);
}
