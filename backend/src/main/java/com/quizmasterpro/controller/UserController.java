package com.quizmasterpro.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.quizmasterpro.model.User;
import com.quizmasterpro.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<User> all() {
        return repository.findAll();
    }

    @PostMapping
    public User create(@RequestBody User user) {
        return repository.save(user);
    }
}
