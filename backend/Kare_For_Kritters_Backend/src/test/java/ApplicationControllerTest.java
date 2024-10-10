package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.controller;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Application;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Pets;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ApplicationRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

class ApplicationControllerTest {

    @InjectMocks
    private ApplicationController applicationController;

    @Mock
    private ApplicationRepository applicationRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAll() {
        when(applicationRepository.findAll()).thenReturn(Collections.emptyList());

        List<Application> applications = applicationController.getAll();

        assertTrue(applications.isEmpty());
        verify(applicationRepository, times(1)).findAll();
    }

    @Test
    void testGetById() {
        Application application = new Application();
        when(applicationRepository.findByID(1)).thenReturn(application);

        Application foundApplication = applicationController.getByid(1);

        assertNotNull(foundApplication);
        verify(applicationRepository, times(1)).findByID(1);
    }

    @Test
    void testAcceptApp() {
        Application application = new Application();
        when(applicationRepository.findByID(1)).thenReturn(application);

        applicationController.accepApp(1);

        assertTrue(application.isAccepted());
        assertTrue(application.isPending());
        verify(applicationRepository, times(1)).save(application);
    }

    @Test
    void testDenyApp() {
        Application application = new Application();
        when(applicationRepository.findByID(1)).thenReturn(application);

        applicationController.denyApp(1);

        assertFalse(application.isAccepted());
        assertTrue(application.isPending());
        verify(applicationRepository, times(1)).save(application);
    }

}
