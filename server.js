
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import posts from './routes/posts_r.js'


dotenv.config()
const app = express()

app.use(cors())

app.use(express.json())
app.use(( req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/posts', posts)


const port = process.env.PORT

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));


app.listen(port, () => console.log("Listening on port 4000..."))