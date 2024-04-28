
INSERT INTO regiones (id, nombre) VALUES (1, 'Herramientas Express');
INSERT INTO regiones (id, nombre) VALUES (2, 'Tornillos Veloz');
INSERT INTO regiones (id, nombre) VALUES (3, 'Tornillos y Tuercas SE');
INSERT INTO regiones (id, nombre) VALUES (4, 'Pinturas PinturaPlus');
INSERT INTO regiones (id, nombre) VALUES (5, 'Plomería Aquatec');


/* Populate tabla clientes */
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES(1, 'Martillo', 'Black & Decker', '11', '2018-01-01');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES(2, 'Destornillador', 'Stanley', '4', '2018-01-02');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES(3, 'Taladro', 'Bosch', '21', '2018-01-03');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES(4, 'Pintura', 'Sherwin-Williams', '14', '2018-01-04');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES(5, 'Clavos', 'Senco', '43', '2018-02-01');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES(4, 'Cinta de aislar', 'Durex', '40', '2019-04-11');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES(1, 'Cinta métrica', 'Stanley', '42', '2018-02-18');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES(1, 'Llave inglesa', 'Facom', '15', '2018-02-28');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES(3, 'Pala', 'Tramontina', '23', '2018-03-03');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES(5, 'Sierra eléctrica', 'Makita', '3', '2018-03-04');


/* Creamos algunos usuarios con sus roles */
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('pablo','$2a$10$C3Uln5uqnzx/GswADURJGOIdBqYrly9731fnwKDaUdBkt/M3qvtLq',1, 'Andres', 'Guzman','profesor@bolsadeideas.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('admin','$2a$10$RmdEsvEfhI7Rcm9f/uZXPebZVCcPC7ZXZwV51efAvMAp1rIaRAfPK',1, 'John', 'Doe','jhon.doe@bolsadeideas.com');

INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (1, 1);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2, 2);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2, 1);