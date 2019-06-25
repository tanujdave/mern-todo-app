// modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const todoRoutes = require('./api/routes/todos')

// connect database
mongoose.connect(
    'mongodb+srv://root:' + 
    process.env.MONGO_ATLAS_PW + 
    '@cluster0-3s0ia.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
);

// create server
const app = express()

// config middleware
app.use(bodyParser.json())
app.use(cors())

// routes
app.use('/todos', todoRoutes)

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;