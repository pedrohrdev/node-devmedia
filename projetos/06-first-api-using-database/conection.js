import mysql from 'mysql2/promise'

const pool = mysql.createPool(

    {
        host: 'localhost',
        user: 'userLibertadores',
        password: '1234',
        database: 'LibertadoresDB'
    }

);

export default pool;