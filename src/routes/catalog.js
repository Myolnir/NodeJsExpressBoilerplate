const express = require('express');
const router = express.Router();
const container = require('../boot');

// Require controller modules.
const controller = container.resolve('controller');

// POST backup all data
router.post('/post', controller.postData.bind(controller));

// Get all activities
router.get('/get', controller.getData.bind(controller));
module.exports = router;
