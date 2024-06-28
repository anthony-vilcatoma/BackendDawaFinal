const express = require('express');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
const taskTypeRoutes = require('./routes/taskTypeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/tasks', taskRoutes);
app.use('/task-types', taskTypeRoutes);

// Sincronización con la base de datos y arranque del servidor
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
