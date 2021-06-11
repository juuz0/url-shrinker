const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const homeHandler = require('./handlers/home')
const apiCreateHandler = require('./handlers/api_create')
const linkHandler  = require('./handlers/link_handler')
const generateHandler = require('./handlers/generate')
const shrinkobj = require('./models/shrinkSchema');
const mongoPass = process.env.mongo_pass

 mongoose.connect(
    `mongodb://juuz0:${mongoPass}@cluster0-shard-00-00.443eu.mongodb.net:27017,cluster0-shard-00-01.443eu.mongodb.net:27017,cluster0-shard-00-02.443eu.mongodb.net:27017/shrinkDB?ssl=true&replicaSet=atlas-h0jl7s-shard-0&authSource=admin&retryWrites=true&w=majority`,
     { useNewUrlParser: true }).then(() =>  {
         app.listen(port, () => console.log('Up! :D'))
        }).catch((e) => {
            console.log(e)
        })



app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}));


app.set('view engine', 'ejs')

app.get('/', (req,res) => homeHandler(req,res))

app.post('/generate', (req,res) => generateHandler(req,res,shrinkobj))

app.get('/api/create', (req,res) => apiCreateHandler(req,res,shrinkobj))

app.get('/:kek', (req, res) => linkHandler(req,res,shrinkobj))


