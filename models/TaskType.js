const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TaskType = sequelize.define('TaskType', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'task_types',
});

module.exports = TaskType;
