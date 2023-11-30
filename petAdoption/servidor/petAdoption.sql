-- Crea la base de datos petAdoptionDB
CREATE DATABASE petAdoptionDB;
-- Conectarse a la base de datos de petAdoptionDB
\c petAdoptionDB

-- Crea tabla Usuarios
CREATE TABLE Usuarios (id SERIAL PRIMARY KEY,nombre VARCHAR(100),imagen VARCHAR(250), email VARCHAR(100),contrasena VARCHAR(100),direccion VARCHAR(200),ciudad VARCHAR(50),telefono VARCHAR(20),fecha_registro TIMESTAMP
);

-- Crea tabla Mascotas
CREATE TABLE Mascotas (id SERIAL PRIMARY KEY,id_usuario INT REFERENCES Usuarios(id),nombre VARCHAR(100),imagen TEXT,especie VARCHAR(100),descripcion TEXT,ciudad VARCHAR(200),sexo VARCHAR(100), edad INT,fecha_publicacion TIMESTAMP
);

-- Crea tabla de Favoritos
CREATE TABLE Favoritos (id SERIAL PRIMARY KEY,id_usuarios INT,id_mascotas INT,FOREIGN KEY (id_usuarios) REFERENCES usuarios(id),FOREIGN KEY (id_mascotas) REFERENCES mascotas(id));

-- Crea tabla de Adopciones
CREATE TABLE Adoptantes (id SERIAL PRIMARY KEY,id_usuarios INT,id_mascotas INT,FOREIGN KEY (id_usuarios) REFERENCES usuarios(id),FOREIGN KEY (id_mascotas) REFERENCES mascotas(id));

-- Crea tabla de Adoptados
CREATE TABLE Adoptados (id SERIAL PRIMARY KEY,id_usuarios INT,id_mascotas INT,FOREIGN KEY (id_usuarios) REFERENCES usuarios(id),FOREIGN KEY (id_mascotas) REFERENCES mascotas(id));