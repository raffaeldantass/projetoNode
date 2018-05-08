const mysql = require('mysql')
module.exports = mysql.createPool({
    user: 'root',
    password: 'root',
    database: 'cdc',
    host: 'localhost'
})