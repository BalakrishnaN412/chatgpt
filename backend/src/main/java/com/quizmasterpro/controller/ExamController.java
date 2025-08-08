package com.quizmasterpro.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.quizmasterpro.model.Exam;
import com.quizmasterpro.repository.ExamRepository;

@RestController
@RequestMapping("/api/exams")
public class ExamController {
    private final ExamRepository repository;

    public ExamController(ExamRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Exam> all() {
        return repository.findAll();
    }

    @PostMapping
    public Exam create(@RequestBody Exam exam) {
        return repository.save(exam);
    }
}
