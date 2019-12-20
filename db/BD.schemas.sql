CREATE DATABASE Planifificacion;

USE Planifificacion;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Pruebas'; 

CREATE TABLE IF NOT EXISTS users(
	user_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (user_id)
);