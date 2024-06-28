const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const TaskType = require('./TaskType');
const Category = require('./Category');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dueDate: {
    type: DataTypes.DATE,
  },
  taskTypeId: {
    type: DataTypes.INTEGER,
    references: {
      model: TaskType,
      key: 'id',
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
  },
}, {
  tableName: 'tasks',
});

Task.belongsTo(TaskType, { foreignKey: 'taskTypeId' });
Task.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = Task;
