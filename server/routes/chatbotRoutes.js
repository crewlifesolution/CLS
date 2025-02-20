// routes/chatbotRoutes.js
const express = require('express');
const { chatbotResponse } = require('../controllers/chatbotController');
const router = express.Router();

router.post('/ask', chatbotResponse);

module.exports = router;
