import pool from '../db/pool.js';

export const updateTask = async (req, res) => {

    const { id } = req.params;
    const { title, description, is_completed} = req.body;

    try {

        console.log("Parâmetros:", { title, description, is_completed, id });

        const statusText = is_completed ? 'concluido' : 'pendente'

        const query = `
            UPDATE tasks SET title = ?, description = ?, status = ?
            WHERE id = ?
        `

        const [result] = await pool.execute(query, [title, description, statusText, id]);

        if(result.affectedRows === 0) {
            return res.status(404).json({ message: "Task not Found" });
        };

        return res.status(200).json({
            message: "Task update sucesfuly"
        });

    } catch(error) {
        console.error(`Error updating task: ${error}`);
        return res.status(500).json({ message: "Internal server error" });
    }

}