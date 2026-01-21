const mysql = require('mysql2/promise');

const pool = mysql.create(

    {
        host: 'localhost',
        user: 'userLibertadores',
        password: 1234,
        database: 'LibertadoresDB'
    }

);

module.exports = pool;