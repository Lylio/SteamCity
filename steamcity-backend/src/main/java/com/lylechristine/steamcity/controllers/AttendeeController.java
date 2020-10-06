package com.lylechristine.steamcity.controllers;

import com.lylechristine.steamcity.models.Bike;
import com.lylechristine.steamcity.repositories.AttendeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/attendees")
public class AttendeeController {

    @Autowired
    AttendeeRepository attendeeRepository;

    //Get list of all attendees
    @GetMapping
    public List<Bike> list() {
        return attendeeRepository.findAll();
    }

    //Create a new attendee
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Bike bike) {
        attendeeRepository.save(bike);
    }

    //View attendee based on id
    @GetMapping("/{id}")
    public Bike get(@PathVariable("id") long id) {
        return attendeeRepository.getOne(id);
    }
}

