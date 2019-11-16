const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');

mongoose.connect('mongodb+srv://Wojtek:E7FpPnrRCER8dXCl@cluster0-n9gde.mongodb.net/node-angular?retryWrites=true&w=majority')
    .then(() => {
        console.log('Połączono z bazą danych');
    }).catch(() => {
        console.log('Nie można było połączyć z bazą danych');
    })


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
})
app.use("/api/posts", postsRoutes);

module.exports = app;