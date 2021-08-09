const mysql = require("mysql")
require('dotenv').config()

const db_info = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const db = mysql.createConnection(db_info)
db.connect()

module.exports = db