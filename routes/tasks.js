const express = require("express");
const { createTask, getAllTasks, getTaskById, updateTaskStatus, deleteTask } = require("../controllers/taskController");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.post("/", protect, createTask);
router.get("/", protect, getAllTasks);
router.get("/:id", protect, getTaskById);
router.put("/:id", protect, updateTaskStatus);
router.delete("/:id", protect, deleteTask);

module.exports = router;
