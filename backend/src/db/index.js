const { Pool } = require('pg');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const pool = new Pool(dbConfig);

module.exports = {
    query: (text, params) => pool.query(text, params),
    closeConnection: () => pool.end()
};