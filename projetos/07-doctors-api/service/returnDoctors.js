import pool from "../connection.js";

export async function returnDoctors() {

    try {
        const [rows] = await pool.query('SELECT * FROM medicos');
        return rows
    } catch(err) {
        console.log('Erro ao buscar medicos no db' + err);
        throw err
    }
}