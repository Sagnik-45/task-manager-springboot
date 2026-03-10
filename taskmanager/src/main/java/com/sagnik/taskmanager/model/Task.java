package com.sagnik.taskmanager.model;
import jakarta.persistence.*;
import lombok.Data;
import jakarta.validation.constraints.NotBlank;


@Entity
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Title cannot be empty")
    private String title;
    private String description;
    @Enumerated(EnumType.STRING)
    private Status status;
}
