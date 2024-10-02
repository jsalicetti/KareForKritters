package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository  extends JpaRepository<Profile, Integer> {
}

