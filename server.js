require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 8000;
const app = express();

let posts = [
    { id: 1, title: "postOne"},
    { id: 1, title: "posttow"},
    { id: 1, title: "postThree"}
];

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.get('/api/posts/:id', (req,res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
});

app.listen(port, console.log(`server is okay port ${port}`));