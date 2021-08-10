const mysql = require('mysql')
const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
})

const db_info = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
   /*
    host: 'localhost',
    user: 'mvptest',
    password: '111111',
    database: 'MVP1'
    */
}

const db = mysql.createConnection(db_info)
db.connect()

module.exports = db