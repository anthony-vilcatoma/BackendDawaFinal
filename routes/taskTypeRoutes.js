const express = require('express');
const router = express.Router();
const taskTypeController = require('../controllers/taskTypeController');

router.get('/', taskTypeController.getAllTaskTypes);
router.post('/', taskTypeController.createTaskType);
router.get('/:id', taskTypeController.getTaskTypeById);
router.put('/:id', taskTypeController.updateTaskType);
router.delete('/:id', taskTypeController.deleteTaskType);

module.exports = router;
