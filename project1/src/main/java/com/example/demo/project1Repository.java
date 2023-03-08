package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface project1Repository extends JpaRepository<Project1,Long>{
	
}
