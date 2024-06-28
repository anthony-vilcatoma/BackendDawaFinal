const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_task_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
