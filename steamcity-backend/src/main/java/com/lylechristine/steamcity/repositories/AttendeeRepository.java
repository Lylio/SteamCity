package com.lylechristine.steamcity.repositories;

import com.lylechristine.steamcity.models.Bike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendeeRepository extends JpaRepository<Bike, Long> {
}
