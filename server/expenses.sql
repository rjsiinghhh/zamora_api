CREATE TABLE expenses(
    ex_id SERIAL PRIMARY KEY,
    date DATE, 
    price NUMERIC, 
    category VARCHAR
);


INSERT INTO expenses (date, price, category) VALUES ('2016-03-02 12:05:00', 500.25 , 'work');