/* DO NOT EDIT */

const express = require('express');
const path = require('path');
const {Dog} = require('./models')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../public')));

const challenge0router = require('../../challenge-0/router');
const challenge1router = require('../../challenge-1/router');

app.use('/api', challenge0router);
app.use('/api', challenge1router);

// this route is for testing:
app.get('/api/dogs/:id', async (req, res, next) => {
    try {
        const dog = await Dog.findByPk(req.params.id);
        res.json(dog);
    }
    catch (err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    console.error(err, err.stack);
    res.status(500).send(err);
});

module.exports = app;
