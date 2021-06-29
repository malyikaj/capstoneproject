package com.SpringBootFirstProject.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.SpringBootFirstProject.demo.model.Persons;

public interface PersonRepository extends JpaRepository <Persons, Integer >  {

	
}
