const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/post');
const app = express();
const mongoose = require('mongoose');


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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
})


app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'Poprawnie dodano Posta',
            postId: createdPost._id
        });
    });
});

app.get('/api/posts', (req, res, next) => {
    Post.find()
        .then((documents) => {
            res.status(200).json({
                message: 'Poprawnie pobrano posty!',
                posts: documents
            });
        })
})

app.delete("/api/posts/:id", (req, res, next) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Post deleted!" });
    });
});

module.exports = app;