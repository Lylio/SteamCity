#!/usr/bin/env bash

create_database() {
 echo "** creating SQLite database... **"
 echo "** SQLite database created **"
 sqlite3 attendee.db < ../src/main/resources/attendees.sql
}

create_database
