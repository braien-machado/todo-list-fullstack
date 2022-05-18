const express = require('express');
const { Task } = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const tasks = await Task.findAll();

    return res.status(200).json(tasks);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

module.exports = router;
