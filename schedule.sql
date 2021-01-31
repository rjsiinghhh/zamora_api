CREATE DATABASE zamora;

\c zamora;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    date DATE, 
    description VARCHAR(255), 
    icon VARCHAR(10)
);


INSERT INTO todo (date, description, icon) VALUES ('2016-03-02 12:05:00', 'never mind son, i got it', 'work');




\q;