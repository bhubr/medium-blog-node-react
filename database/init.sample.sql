CREATE DATABASE my_database CHARACTER SET utf8 COLLATE utf8_unicode_ci;
CREATE USER 'mydbuser'@'localhost' IDENTIFIED BY 'mydbpass';
GRANT ALL PRIVILEGES ON my_database.* TO 'mydbuser'@'localhost';
FLUSH PRIVILEGES;
