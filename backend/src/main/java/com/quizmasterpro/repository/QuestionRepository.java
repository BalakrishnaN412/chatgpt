package com.quizmasterpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.quizmasterpro.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {}
