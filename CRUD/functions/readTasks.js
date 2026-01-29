import pool from '../db/pool.js';

export const readTasks = async (req, res) => {

    try {

        const query = 'SELECT * FROM tasks';

        const [rows] = await pool.execute(query);

        return res.status(200).json(rows);

    } catch(error) {

        console.error('Error reading tasks:', error);

        return res.status(500).json({
            message: "internal server error"
        })

    }

};

export default readTasks;