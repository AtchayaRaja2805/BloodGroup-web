package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class project1Controller {
	@Autowired
	project1Repository Repository;
	@Autowired
	project1Service Service;
	@GetMapping("/get")
	List<Project1>solution(){return Repository.findAll();}	
	@PostMapping("/post")
	public Project1 postsol(@RequestBody Project1 obj) {
		return Repository.save(obj);
	}
	@DeleteMapping("/del")
	public String deletesol(@RequestParam long contactnumber)
	{
		return Service.delete(contactnumber);
	}
	@PutMapping("/put")
	public String update(@RequestBody Project1 obj)
	{
		return Service.update(obj);
	}
}
