const mysql = require('mysql2')
const pool = mysql.createPool ({
    host : 'localhost',
    user : 'root',
    password : 'manager',
    database : 'java2',
    port : 3306,
    connectionLimit : 20 
})
module.exports = pool