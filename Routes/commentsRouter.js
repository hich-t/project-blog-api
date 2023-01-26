const express = require('express')
const commentsRouter = require('express').Router()

const comments = require("../models/comments.model")

commentsRouter.use(express.json())


commentsRouter.get('/posts/comments/:id', (req, res) => {
    comments.find( {post : req.params.id} )
    .populate("author")
    .then((comments) => res.json(comments))
    .catch((err) => res.json(err))
})

commentsRouter.get('/comments/:id' , (req, res) => {
    comments.findOne({ _id : req.params.id })
    .populate('author')
    .then((comments)  => res.json(comments))
    .catch((err) => console.log(err))
})

commentsRouter.post('/posts/comments/:id', (req, res) => {
    comments
    .create(req.body)
    .then(newcomment => res.json(newcomment))
    .catch((err) => res.json(err))
})



commentsRouter.put('/comments/:id' , async (req, res) => {
    await comments.findOne({ _id : req.params.id })
    await comments.updateOne({ $set : req.body })
    await comments.findOne({ _id: req.params.id })
    .then ((newcomment) => res.json(newcomment))
    .catch((err) => res.json(err))

})

commentsRouter.delete('/comments/:id' , (req, res) => {
    comments.deleteOne({ _id : req.params.id })
    .then (() => res.json('comment deleted'))
    .catch((err) => res.json(err))
})

module.exports = commentsRouter