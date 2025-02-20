// routes/automationRoutes.js
const express = require('express');
const { startAutomation } = require('../controllers/automationController');
const router = express.Router();

router.post('/start', startAutomation);

module.exports = router;
