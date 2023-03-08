package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class project1Service {
	@Autowired
	project1Repository Repository;
	public String delete(Long contactnumber)
	{
		Repository.deleteById(contactnumber);
		return "deleted";
	}
	public String update(Project1 obj) {
		Repository.save(obj);
		return "updated successfully";
	}
	
}
