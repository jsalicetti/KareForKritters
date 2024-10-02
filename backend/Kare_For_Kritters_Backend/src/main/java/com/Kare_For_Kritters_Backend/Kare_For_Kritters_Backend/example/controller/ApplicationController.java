package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.controller;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Application;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/application")
public class ApplicationController {

    @Autowired
    ApplicationRepository applicationRepository;
    @GetMapping("/all")
    public List<Application> getAll(){
        return applicationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Application getByid( @PathVariable Integer id) {
        return applicationRepository.findByID(id);
    }
    @PutMapping("/accept/{id}")
    public void accepApp( @PathVariable Integer id){
        Application application = applicationRepository.findByID(id);
        application.setAccepted(true);
        application.setPending(true);
        applicationRepository.save(application);
    }

    @PutMapping("/deny/{id}")
    public void denyApp( @PathVariable Integer id){
        Application application = applicationRepository.findByID(id);
        application.setAccepted(false);
        application.setPending(true);
        applicationRepository.save(application);
    }
}
