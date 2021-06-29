package com.SpringBootFirstProject.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SpringBootFirstProject.demo.exception.ResourceNotFoundException;
import com.SpringBootFirstProject.demo.model.Persons;
import com.SpringBootFirstProject.demo.repository.PersonRepository;
 

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class PersonsController {
	@Autowired
	
	private PersonRepository personRepo;
	@GetMapping("/persons")
	public List<Persons> getAllPersons() {
		return personRepo.findAll();
		
	}
	@GetMapping("/persons/{id}")
	public ResponseEntity<Persons>getPersonId(@PathVariable int id){
		  
		Persons person = personRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Not found!"));
		
		return ResponseEntity.ok(person);
	}
	@PostMapping("/persons")
	public Persons newPerson(@RequestBody Persons p) {
		return personRepo.save(p);
	}
	
	@PutMapping("/persons/{id}")
	public ResponseEntity<Persons> updatePerson(@PathVariable int id, @RequestBody Persons person)
	{
		Persons s= personRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found"));
//		s.setId(person.getId());
		s.setUser_email(person.getUser_email());
		s.setUser_name(person.getUser_name());
		s.setFirst_name(person.getFirst_name());
		s.setLast_name(person.getLast_name());
		Persons updatedPerson=personRepo.save(s);
		return ResponseEntity.ok(updatedPerson);
	}
	
	@DeleteMapping("/persons/{id}")
	public String deletePersons(@PathVariable int id)
	{
		personRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found"));
		personRepo.deleteById(id);
		return "The user with id: "+ id + "is removed from the database.";
	}
	

}
