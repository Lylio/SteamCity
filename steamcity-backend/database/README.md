# Create SQLite Database

## Shell Script

1. `./create_database.sh`

## Manually Method

1. `sudo apt install sqlite3`

2. `sqlite3 --version`

3. `sqlite3 attendeeTEST.db`

4. Insert following SQL

```sql
CREATE TABLE
    attendee
    (
        id BIGINT NOT NULL,
        email VARCHAR,
        diet VARCHAR,
        name VARCHAR,
        phone VARCHAR,
        preference_date DATETIME,
        diet_req VARCHAR,
        has_paid VARCHAR,
        PRIMARY KEY (id)
    );

INSERT INTO attendee (id, email, diet, name, phone, preference_date, diet_req, has_paid)
  VALUES (1, 'j.hughes@.bueller.com', 'Vegan', 'John Hughes', '07865 657 765', '2020-12-15', 'Allergic to nuts', 'n');
INSERT INTO attendee (id, email, diet, name, phone, preference_date, diet_req, has_paid)
  VALUES (2, 's.spielberg@et.com', 'No Preference', 'Steven Spielberg', '07876 641 142', '2020-12-16', 'Mustard on everything', 'y');
INSERT INTO attendee (id, email, diet, name, phone, preference_date, diet_req, has_paid)
  VALUES (3, 'm.scorsese@goodfellas.com', 'Pescatarian', 'Martin Scorsese', '563-891-5555', '2020-12-16', 'NO BONES', 'y');


CREATE TABLE
    hibernate_sequence
    (
        next_val BIGINT
    );
    
INSERT INTO hibernate_sequence (next_val) VALUES (4);
```
