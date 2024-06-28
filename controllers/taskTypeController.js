const TaskType = require('../models/TaskType');

exports.getAllTaskTypes = async (req, res) => {
  try {
    const taskTypes = await TaskType.findAll();
    res.status(200).json(taskTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTaskType = async (req, res) => {
  try {
    const { name } = req.body;
    const taskType = await TaskType.create({ name });
    res.status(201).json(taskType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTaskTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const taskType = await TaskType.findByPk(id);
    if (taskType) {
      res.status(200).json(taskType);
    } else {
      res.status(404).json({ message: 'TaskType not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTaskType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const taskType = await TaskType.findByPk(id);
    if (taskType) {
      taskType.name = name;
      await taskType.save();
      res.status(200).json(taskType);
    } else {
      res.status(404).json({ message: 'TaskType not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTaskType = async (req, res) => {
  try {
    const { id } = req.params;
    const taskType = await TaskType.findByPk(id);
    if (taskType) {
      await taskType.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'TaskType not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
