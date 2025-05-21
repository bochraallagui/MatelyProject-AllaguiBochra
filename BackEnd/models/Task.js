const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    status: {
        type: String,
        enum: ['todo', 'in_progress', 'done'],
        default: 'todo'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

taskSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Task', taskSchema);
