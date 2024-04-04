CREATE TABLE Reservas (
    id INT IDENTITY PRIMARY KEY,
    data VARCHAR(20) NOT NULL,
    hora VARCHAR(10) NOT NULL,
    motivo_da_reserva VARCHAR(255) 
);