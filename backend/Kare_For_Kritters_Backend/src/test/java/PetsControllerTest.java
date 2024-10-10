package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.controller;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Pets;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.PetsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class PetsControllerTest {

    @InjectMocks
    private PetsControllerTest petsController;

    @Mock
    private PetsRepository petsRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllPets() {
        // Arrange
        List<Pets> mockPetsList = new ArrayList<>();
        mockPetsList.add(new Pets());
        when(petsRepository.findAll()).thenReturn(mockPetsList);

    }
};



