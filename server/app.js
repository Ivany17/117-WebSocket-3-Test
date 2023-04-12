const cors = require('cors');
const express = require('express');
const app = express();
const { Message } = require('./models')

app.use(cors());
app.use(express.json());

app.get('/', async (req, res, next) => {
    try {
        const messages = await Message.find();
        res.send({data: messages})
    } catch (error) {
        next(error)
    }
})

app.use((err, req, res, next) => {
    res.status(500).send(err)
})

module.exports = app;