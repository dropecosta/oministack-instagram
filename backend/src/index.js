const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

// importando http do node
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://dropecosta:soeuquesei@cluster0-ax0q4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use(cors());

app.use(require('./routes'))

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

server.listen(3333);