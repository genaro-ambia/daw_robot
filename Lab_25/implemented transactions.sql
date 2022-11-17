DELIMITER $$
START TRANSACTION
UPDATE Propiedades
SET Operacion = 'Venta', Precio = U_Precio 
WHERE Propiedades.ID = U_ID
COMMIT

DELIMITER &&
START TRANSACTION
UPDATE Propiedades
SET Operacion = 'Venta', Precio = U_Precio 
WHERE Propiedades.ID = U_ID
COMMIT