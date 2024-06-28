const Task = require('../models/Task');
const TaskType = require('../models/TaskType');
const Category = require('../models/Category');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ include: [TaskType, Category] });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, taskTypeId, categoryId, dueDate, completed } = req.body;
    const task = await Task.create({ title, description, taskTypeId, categoryId, dueDate, completed });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id, { include: [TaskType, Category] });
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, taskTypeId, categoryId, dueDate, completed } = req.body;
    const task = await Task.findByPk(id);
    if (task) {
      task.title = title;
      task.description = description;
      task.taskTypeId = taskTypeId;
      task.categoryId = categoryId;
      task.dueDate = dueDate;
      task.completed = completed;
      await task.save();
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
