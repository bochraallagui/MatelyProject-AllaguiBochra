const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


// Retourne les tâches créées après une date, triées du plus récent au plus ancien
router.get('/', async (req, res) => {
    try {
        const after = new Date(req.query.after);
        if (isNaN(after)) throw new Error('Invalid date');

        const tasks = await Task.find({ createdAt: { $gt: after } })
            .sort({ createdAt: -1 }) // ✅ tri décroissant = plus récentes d'abord
            .limit(20);              // ✅ limiter à 20 tâches max

        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: 'Invalid date format or internal error' });
    }
});


// Simule l'ajout de 10 tâches espacées de 5 secondes
router.post('/simulate', (req, res) => {
    const statuses = ['todo', 'in_progress', 'done'];
    let count = 0;

    const createTask = async () => {
        const task = new Task({
            title: `Task ${Date.now()}`,
            status: statuses[Math.floor(Math.random() * statuses.length)],
        });
        await task.save();
        count++;
        if (count < 10) {
            setTimeout(createTask, 5000);
        }
    };

    createTask();
    res.send('Simulation started');
});

module.exports = router;
