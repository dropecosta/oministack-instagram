const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://dropecosta:soeuquesei@cluster0-ax0q4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.listen(3333);

app.get('/', (req, res) => {
    res.send(`Olá ${req.query.name}`)
});
