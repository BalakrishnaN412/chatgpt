package com.quizmasterpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quizmasterpro.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {}
