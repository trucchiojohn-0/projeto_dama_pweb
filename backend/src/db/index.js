const {Pool}= require('pg');

const dbConfig={
    host:process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const connection = new Pool(dbConfig)

const query = (req, res) => {
    return connection.query(req, res)
}

const closeConnection = async () => {
    return connection.end()
}


module.exports = {closeConnection, query}