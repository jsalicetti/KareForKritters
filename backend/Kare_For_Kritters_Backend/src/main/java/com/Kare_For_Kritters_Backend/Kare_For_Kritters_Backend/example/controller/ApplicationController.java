package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.controller;

import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Application;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Pets;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/application")
public class ApplicationController {

    @Autowired
    ApplicationRepository applicationRepository;

    // handles GET requests for applications and returns a list of all applications
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

    @PostMapping
    public void sendApp(@RequestBody Application application){
        applicationRepository.save(application);
        System.out.println("Printing the application" + application);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateApp(@PathVariable Long id, @RequestBody Application application){
        // fetches the application by its ID
        Application findApplication = applicationRepository.findById(id).orElse(null);



        if (findApplication.equals(null)){
            return ResponseEntity.ok().body("Application with the id given is not found in database");
        }


        findApplication.setInquireAdopt(application.getInquireAdopt());
        findApplication.setAdoptedBefore((application.getAdoptedBefore()));
        findApplication.setLivingSituation((application.getAdoptedBefore()));
        findApplication.setRentOwn(application.getRentOwn());
        findApplication.setFencedYard(application.getFencedYard());
        findApplication.setLiveAlone(application.getLiveAlone());
        findApplication.setLiveChildren((application.getLiveChildren()));
        findApplication.setHomeAllergies((application.getHomeAllergies()));
        findApplication.setExercisePet(application.getExercisePet());
        findApplication.setTrainingPet(application.getTrainingPet());
        findApplication.setPetsAtHome(application.getPetsAtHome());
        findApplication.setCarePet((application.getCarePet()));
        findApplication.setHoursHome((application.getHoursHome()));
        findApplication.setEmail(application.getEmail());
        findApplication.setPetGender(application.getPetGender());
        findApplication.setPetAge(application.getPetAge());
        findApplication.setFullName((application.getFullName()));
//        findApplication.setAccepted((application.getAccepted()));
//        findApplication.setPending(application.getPending());

        Application savedApp  = applicationRepository.save(findApplication);

        return ResponseEntity.ok().body(savedApp);
    }

    // delete added
    @DeleteMapping("/{id}")
    public void deleteApp( @PathVariable Long id){
        applicationRepository.deleteById(id); // fetches the application by its ID

        System.out.println("Deleted application with id " + id); // saved the updated application back to the repository
    }

    @PutMapping("/deny/{id}")
    public void denyApp( @PathVariable Integer id){
        Application application = applicationRepository.findByID(id); // fetches the application by its ID
        application.setAccepted(false); // marks the application as denied
        application.setPending(true); // keeps the application in a pending state
        applicationRepository.save(application); // saved the updated application back to the repository
    }
}


