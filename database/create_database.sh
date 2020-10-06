#!/usr/bin/env bash

create_database() {
 echo "**creating database...**"
 echo "**database running**"
 sqlite3 attendee.db < attendees.sql
}

create_database
