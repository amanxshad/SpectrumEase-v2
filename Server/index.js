const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const testModel = require('./models/hexColorCode')

const app = express()
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/colors', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));

app.get('/get', (req,res)=>{
    testModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req,res)=>{
    const color = req.body.color;
    const colorOdd = req.body.colorOdd;
    testModel.create({
        color: color,
        colorOdd: colorOdd
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})


app.listen(port, ()=> {
    console.log("Server is fired up")
})
