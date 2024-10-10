package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository;


import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Pets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetsRepository extends JpaRepository<Pets,Long> {
}
