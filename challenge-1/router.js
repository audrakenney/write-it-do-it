'use strict';

const express = require('express');
const { Dog } = require('../app/server/models');

// This router is already mounted on `/api` in app/server/app.js
const router = express.Router();

router.post('/dogs', (req, res, next) => {
  try {
    res.status(201).end();
  } catch (error) {
    next(error)
  }

});

module.exports = router;
