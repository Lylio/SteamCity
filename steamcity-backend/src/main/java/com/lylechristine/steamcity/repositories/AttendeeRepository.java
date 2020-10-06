package com.lylechristine.steamcity.repositories;

import com.lylechristine.steamcity.models.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {
}
