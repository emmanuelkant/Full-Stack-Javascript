const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://rocket:rocket-2@cluster0-d63q1.mongodb.net/rocket?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json())
server.use(routes);

server.listen(3333);