const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const db = require('./db/index.js')
const port = 3000

/* MÉTODO GET */
app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM produtos ORDER BY id ASC', [])
        .then((result) => {
            res.json(result.rows);
        })
        .catch((err) => {
            console.error("Erro no GET /produtos:", err);
            res.status(404).json({ error: 'Erro ao buscar produtos.' });
        });
});

/* MÉTODO POST */
app.post('/produtos', (req, res) => {
    const { titulo, img_produto, marca, descricao, valor } = req.body;
    const querySQL = `
        INSERT INTO produtos (titulo, img_produto, marca, descricao, valor) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [titulo, img_produto, marca, descricao, valor];

    db.query(querySQL, values)
        .then((result) => {
            res.status(201).json(result.rows[0]);
        })
        .catch((err) => {
            console.error("Erro no POST /produtos:", err);
            res.status(404).json({ error: 'O produto não foi inserido.' });
        });
});

app.listen(port, () => {
    console.log(`Servidor conectado na porta ${port}`);
});