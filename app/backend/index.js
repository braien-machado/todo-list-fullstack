const express = require('express');
const cors = require('cors');
require('express-async-errors');
const handleError = require('./src/middlewares/errorHandler');
const TaskRoute = require('./src/routes/taskRoutes');

const app = express();

app.use(express.json());
app.use(cors())

app.use('/task', TaskRoute);

app.use(handleError);

const PORT = process.env.PORT || 3001;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

module.exports = app;
