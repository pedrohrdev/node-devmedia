import pool from '../conection.js'

export async function returnChamps () {

    const connection = await pool.getConnection();

    try {
        const [rows] = await connection.query(
            'SELECT id, campeao, vice, ano FROM campeonatos ORDER BY ano DESC'
        );

        return(rows)
    } finally {
        connection.release();
    }

};

export async function returnChampID(id) {

    const conection = await pool.getConnection();

    try {

        const [rows] = conection.query(
            'SELECT id, campeao, vice, ano FROM campeonatos WHERE id = ?',
            [id]
        ) 

        return rows[0] || null;

    } finally {
        conection.release()
    }

};

export async function returnChampYear(year) {
    try {
        const connection = await pool.getConnection();

        const [rows] = await connection.query(
            'SELECT id, campeao, vice, ano FROM campeonatos WHERE ano = ?',
            [year]
        );

        return rows;

    } catch (err) {
        console.error('Erro na query ');
        throw err;
    } finally {
        connection.release()
    }

};