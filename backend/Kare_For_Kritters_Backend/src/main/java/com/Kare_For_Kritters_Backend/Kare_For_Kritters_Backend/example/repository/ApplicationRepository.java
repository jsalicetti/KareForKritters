package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ApplicationRepository extends JpaRepository<Application,Long> {
    Application findByID(Integer ID);
}