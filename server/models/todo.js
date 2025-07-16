import mongoose from 'mongoose';

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
})

export const Todo = mongoose.model('Todo', toDoSchema);