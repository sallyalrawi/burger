-- ### Schema
DELETE DATABASE IF EXISTS burger_db;
#CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
	PRIMARY KEY (id)
);
INSERT INTO burgers (burger_name) VALUES ('Cheese burger');
INSERT INTO burgers (burger_name) VALUES ('Veggie burger');
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon burger', true);