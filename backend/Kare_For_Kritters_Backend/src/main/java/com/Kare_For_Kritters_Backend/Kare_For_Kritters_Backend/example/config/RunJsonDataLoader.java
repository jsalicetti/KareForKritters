package com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.config;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Pets;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.PetsRepository;
import com.fasterxml.jackson.core.type.TypeReference;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class RunJsonDataLoader implements CommandLineRunner {
    private final Logger logger = LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final PetsRepository petsRepository;
    private final ObjectMapper objectMapper;

    public RunJsonDataLoader(PetsRepository petsRepository, ObjectMapper objectMapper) {
        this.petsRepository = petsRepository;

        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        if (petsRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/pets.json")) {
                List<Pets> pets = objectMapper.readValue(inputStream, new TypeReference<List<Pets>>() {
                });
                logger.info("pets loaded from Json file {}", pets);
                petsRepository.saveAll(pets);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load data from JSON " + "file", e);
            }
        } else {
            logger.info("Data already loaded");
        }
    }
}
