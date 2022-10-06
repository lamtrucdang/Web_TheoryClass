const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');

//GET BACK ALL THE POSTS
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.json({message:err});
    }
});


//SUBMITS A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    try {
    const savedPost = await post.save();
    res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }

});

//SPECIFIC POST
router.get('/:postId', async(req, res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    } catch(err){
        res.json({message:err});
    }
})

//Delete post
router.delete('/:postID', async(req,res) => {
    try {
        const removePost = await Post.remove({_id: req.params.postID });
        res.json(removePost);
    } catch(err){
        res.json({message:err});
    }
});

//Update post
router.patch('/:postID', async(req,res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postID }, 
            {$set: { title: req.body.title } }
        );
        res.json(updatedPost);
    } catch(err){
        res.json({message:err});
    }
});


module.exports = router;