const {Pool}= require('pg');

const dbConfig={
    host:process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const connection = new Pool(dbConfig)

const closeConnection = async () => {
    await connection.end()
}

const query = async (req, res) => {
    const res = await connection.query(req, res)
    return res
}

module.exports = {connection, query}