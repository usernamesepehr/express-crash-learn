import express from 'express';
const router = express.Router();

let posts = [
    { id: 1, title: "postOne"},
    { id: 2, title: "postTow"},
    { id: 3, title: "postThree"}

];

router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0,limit));
    }
    res.json(posts);
});

router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        res.status(404);
    }else {
        res.json(post);
    }
});

export default router;