package com.quizmasterpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quizmasterpro.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
