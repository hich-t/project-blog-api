const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors');

const app = express()

app.use(cors())

app.use(express.urlencoded({extended : true}))
require("dotenv").config()

const usersRouter = require("./Routes/usersRouter")
const postsRouter = require("./Routes/postsRouter")
const commentsRouter = require("./Routes/commentsRouter")

app.use('/', usersRouter)
app.use('/', postsRouter)
app.use('/', commentsRouter)




app.get('/', (req, res) => {
    res.send("Welcome to our blog").status(200)
    
})

const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, { useNewUrlParser : true })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error :"))

app.listen(8000, () => {
    console.log('server is running on port 8000')
})