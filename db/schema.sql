DROP DATABASE IF EXISTS treatments_db;
CREATE DATABASE treatments_db;

\c treatments_db;

DROP TABLE IF EXISTS treatments; 

CREATE TABLE treatments (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    treatment_image TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    price INTEGER NOT NULL DEFAULT 0,
    therapist VARCHAR(255) NOT NULL,
    therapist_image TEXT NOT NULL
);