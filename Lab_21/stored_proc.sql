DELIMITER //
CREATE PROCEDURE crearProovedor(IN rfc varchar(20), IN razonsocial varchar(50))
BEGIN
INSERT INTO proovedores VALUES(rfc, razonsocial)
END

DELIMITER //
CREATE PROCEDURE borrarProyecto(IN numero INT)
BEGIN
DELETE FROM proyectos WHERE numero=numero
END

DELIMITER //

CREATE PROCEDURE modificarPrecioM(IN precio INT, IN clave INT)
BEGIN
UPDATE materiales set precio = precio WHERE clave = clave
END