import express from 'express';
class postController {
    get(req,res) {
        res.json(req.body);
        console.log('test')
    }

    getOne(req,res,next) {

    }
}

export default postController;