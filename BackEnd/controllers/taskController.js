const Task = require('../models/Task');

exports.getTasksAfter = async (req, res) => {
    const after = req.query.after ? new Date(req.query.after) : new Date(0);
    const tasks = await Task.find({ createdAt: { $gt: after } })
        .sort({ createdAt: 1 })
        .limit(20);
    res.json(tasks);
};

exports.simulateTasks = async (req, res) => {
    let count = 0;
    const statuses = ['todo', 'in_progress', 'done'];

    const interval = setInterval(async () => {
        if (count >= 10) return clearInterval(interval);
        const task = new Task({
            title: `Task ${Date.now()}`,
            status: statuses[Math.floor(Math.random() * statuses.length)]
        });
        await task.save();
        count++;
    }, 5000);

    res.status(200).send('Simulation started');
};
