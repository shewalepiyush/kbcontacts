const mysql = require('mysql2')
const pool = mysql.createPool ({
    host : '192.168.43.31',
    user : 'root',
    password : 'kuchbhi',
    database : 'kb',
    port : 9090,
    connectionLimit : 20 
})
module.exports = pool