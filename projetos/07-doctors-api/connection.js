import mysql from 'mysql2/promise';

const pool = mysql.createPool(
    {
        host: 'localhost',
        port: 3306,
        database: 'clinica_medica',
        user: 'root',
        password: '',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        enableKeepAlive: true,

    }
);

(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conexão estabelecida com sucesso!')
        connection.release();
    } catch (err) {

        console.error('erro ao conectar com mysql', err.message),
        console.error(err);
        process.exit();

    }
})

export default pool;