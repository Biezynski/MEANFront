const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
})


app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);

    res.status(201).json({
        message: 'Poprawnie dodano Posta'
    });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [{
            id: 'fsvxcvrfds1235s21',
            title: 'tytuł pierwszego posta z servera',
            content: 'ciało pierwszego posta z servera',
        },
        {
            id: 'asdsax256v3xs45',
            title: 'tytuł drugiego posta z servera',
            content: 'ciało drugiego posta z servera',
        },
        {
            id: '123zefrdascvrf235sa',
            title: 'tytuł trzeciego posta z servera',
            content: 'ciało trzeciego posta z servera',
        }

    ]

    res.status(200).json({
        message: 'Poprawnie pobrano posty!',
        posts: posts

    });
})

module.exports = app;