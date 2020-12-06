#!/usr/bin/env bash

create_database() {
 echo "** creating MySQL database... **"
 echo "** MySQL database created **"
 mysql attendee.db < ../src/main/resources/attendees.sql
}

create_database
