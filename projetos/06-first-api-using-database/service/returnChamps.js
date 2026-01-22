import pool from './returnChamps.js'

export async function returnChamps () {

    const connection = await pool.getConnection();

    // Making sql query in the database
    const champsTable = await connection.query(
        'SELECT id, campeao, vice, ano FROM campeonatos'
    );

    const champs = champsTable[0];

    connection.release();

    return champs;

}