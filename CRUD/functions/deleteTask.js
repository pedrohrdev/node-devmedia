import pool from '../db/pool.js';

export const deleteTask = async (req, res) => {

    const { id } = req.params;

    try {

        const query = `DELETE FROM tasks WHERE id = ?`;

        const [result] = await pool.execute(query, [id]);

        if(result.affectedRows === 0) {
            return res.status(404).json({ message: "Task not found" })
        };

        return res.status(200).json({
            message: "Task removed sucessfuly!"
        });

    } catch(error) {
        console.error(`Error deleting task: ${error.message}`);
        return res.status(500).json({ message: "Internal server error" })
    }

};
