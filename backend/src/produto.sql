CREATE TABLE produtos(
	id SERIAL PRIMARY KEY,
	titulo VARCHAR(255) NOT NULL,
	img_produto TEXT NOT NULL,
	marca VARCHAR(255) NOT NULL,
	descricao TEXT,
	valor DECIMAL(10, 2)  NOT NULL
);