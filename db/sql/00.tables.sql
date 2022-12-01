CREATE TABLE people (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
) ENGINE = NDB;

CREATE TABLE pets (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(20) NOT NULL,
    person_id INT,
    FOREIGN KEY (person_id) REFERENCES people(id)
) ENGINE = NDB;