#!/usr/bin/env bash

create_database() {
 echo "**database running**"
 cd ../database
 sqlite3 bike.db < ../database/bikes-sales.sql
}

create_database
