const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        default: "pending", 
        enum: ["pending", "in-progress", "completed"] 
    },
});

module.exports = mongoose.model("Task", taskSchema);
