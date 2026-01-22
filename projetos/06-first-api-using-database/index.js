import pool from './conection.js';
import express from 'express';
const app = express();

app.listen(9000, async () => {

    const data = new Date();
    console.log(`Servidor inciado em  ${data}`)


    const connection = await pool.getConnection();
    console.log(connection.threadId);

    connection.release()

})