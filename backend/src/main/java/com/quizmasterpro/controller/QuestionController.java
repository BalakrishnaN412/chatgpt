package com.quizmasterpro.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.quizmasterpro.model.Question;
import com.quizmasterpro.repository.QuestionRepository;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {
    private final QuestionRepository repository;

    public QuestionController(QuestionRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Question> all() {
        return repository.findAll();
    }

    @PostMapping
    public Question create(@RequestBody Question question) {
        return repository.save(question);
    }
}
