import pool from '../db/pool.js';

export const createTask = async (req, res) => {

    const { title, description } = req.body;


    if(!title) {
        return res.status(404).json({error: 'Title is required'});
    }

    try {

        const query = 'INSERT INTO tasks (title, description) VALUES (?, ?)';

        const [result] = await pool.execute(query, [title, description]);

        return res.status(201).json({id: result.insertId, title, description})

    } catch(error) {
        console.log(`Error creating task. ${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }
};

export default createTask;