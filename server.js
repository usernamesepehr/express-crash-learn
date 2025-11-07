require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 8000;
const app = express();

let posts = [
    { id: 1, title: "postOne"},
    { id: 2, title: "posttow"},
    { id: 3, title: "postThree"}
];

app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0,limit));
    } else {
        res.json(posts);
    }
});

app.get('/api/posts/:id', (req,res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
});

app.listen(port, console.log(`server is okay port ${port}`));