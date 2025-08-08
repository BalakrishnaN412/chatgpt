package com.quizmasterpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.quizmasterpro.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long> {}
