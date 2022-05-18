const express = require('express');
const TaskController = require('./src/controllers/taskController');

const app = express();

app.use(express.json());

app.use(TaskController);

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  if (err.code) return res.status(err.code).json({ message: err.message });
  if (err.message) return res.status(500).json({ message: err.message });

  return res.status(500).json({ message: 'Something went wrong' });
});

const PORT = process.env.PORT || 3001;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
