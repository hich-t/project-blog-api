const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("express").Router();

const posts = require("../models/posts.model");
const User = require("../models/users.model");

postsRouter.use(express.json());

postsRouter.get("/posts", (req, res) => {
  posts
    .find()
    .populate("author")
    .then((posts) => res.json(posts))
    .catch((err) => res.json(err));
});

postsRouter.get('/users/posts/:id', (req, res) => {
    posts.find( {author: req.params.id} )
    .populate("author")
    .then((comments) => res.json(comments))
    .catch((err) => res.json(err))
})

postsRouter.get("/posts/:id", (req, res) => {
  posts
    .findOne({ _id: req.params.id })
    .populate("author")
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err));
});

postsRouter.post('/posts', (req, res) => {
    posts
    .create(req.body)
    .then(newPost => res.json(newPost))
    .catch((err) => res.json(err))
})



postsRouter.put("/posts/:id", async (req, res) => {
  const updatedPost = await posts.findOne({ _id: req.params.id });
  await posts.updateOne(updatedPost, { $set: req.body });
  await posts
    .findOne({ _id: req.params.id })
    .then((newpost) => res.json(newpost))
    .catch((err) => res.json(err));
});

// postsRouter.put('/posts/:id', async (req, res) => {
//     try {
//         const updatedPost = await posts.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
//         if(!updatedPost) res.status(404).json({ message: 'Post not found' });
//         res.json(updatedPost);
//     } catch (err) {
//         res.status(500).json({ message: err });
//     }
// });

postsRouter.delete("/posts/:id", (req, res) => {
  posts
    .deleteOne({ _id: req.params.id })
    .then(() => res.json("post deleted"))
    .catch((err) => res.json(err));
});

module.exports = postsRouter;
