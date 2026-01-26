import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'dev_libertadores',
  password: '1234',
  database: 'LibertadoresDB',
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  connectTimeout: 3000,       // falha rápido se não conectar em 3s
  // ssl: false,              // tenta sem SSL (MySQL 8 às vezes força)
  socketPath: '/var/run/mysqld/mysqld.sock' 
  
});

pool.on('connection', (connection) => {
  console.log('Nova conexão criada no pool - threadId:', connection.threadId);
});

pool.on('error', (err) => {
  console.error('Erro no pool de conexões:', err);
});

export default pool;