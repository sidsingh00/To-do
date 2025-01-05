const Task = require("../models/Task");

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = new Task({ title, description });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task){
            return res.status(404).json(
                { error: "Task not found" }
            );
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTaskStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!task){
             return res.status(404).json(
                { error: "Task not found" }
            );
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(
            { error: error.message }
        );
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task){ 
            return res.status(404).json(
                { error: "Task not found" }
            );
        }
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json(
            { error: error.message }
        );
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskStatus,
    deleteTask,
};
