package com.quizmasterpro.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.quizmasterpro.model.Category;
import com.quizmasterpro.repository.CategoryRepository;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryRepository repository;

    public CategoryController(CategoryRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Category> all() {
        return repository.findAll();
    }

    @PostMapping
    public Category create(@RequestBody Category category) {
        return repository.save(category);
    }
}
