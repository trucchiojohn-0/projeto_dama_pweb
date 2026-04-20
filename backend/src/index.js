const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const dbConfig = require('./db/index.js')

const port = 3000

app.get('/produtos', (req, res) => {
    dbConfig.query('SELECT * FROM produtos ORDER BY id ASC')
        .then((result) => {
            res.json(result.rows);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Erro ao buscar produtos.' });
        });
});

/* MÉTODO POST */
app.post('/produtos', (req, res) => {
    const { titulo, img_produto, marca, descricao, valor } = req.body;
    const querySQL = `
        INSERT INTO produtos (titulo, img_produto, marca, descricao, valor) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [titulo, img_produto, marca, descricao, valor];

    dbConfig.query(querySQL, values)
        .then((result) => {
            res.status(201).json(result.rows[0]);
        })
        .catch((err) => {
            res.status(500).json({ error: 'O produto não foi inserido.' });
        });
});

app.listen(port, () => {
    console.log(`Servidor conectado na porta ${port}`);
});