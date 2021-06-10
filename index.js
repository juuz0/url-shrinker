const express = require('express')
const app = express()
const port = process.env.port || 3000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {nanoid} = require('nanoid')

const mongoPass = process.env.mongo_pass

 mongoose.connect(
    `mongodb://juuz0:${mongoPass}@cluster0-shard-00-00.443eu.mongodb.net:27017,cluster0-shard-00-01.443eu.mongodb.net:27017,cluster0-shard-00-02.443eu.mongodb.net:27017/shrinkDB?ssl=true&replicaSet=atlas-h0jl7s-shard-0&authSource=admin&retryWrites=true&w=majority`,
     { useNewUrlParser: true }).then(() =>  {
         app.listen(port, () => console.log('Up! :D'))
        }).catch((e) => {
            console.log(e)
        })


const shrinkobj = require('./models/shrinkSchema')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}));


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let url = req.query.url
    let status = req.query.status
    if(status==0){ let msg = req.query.msg
    res.render('index', {
        url:url,
        status:status,
        msg:msg
    })
    }
    else if(status==1){
        res.render('index', {
            url:url,
            status:status
        })
    }
    else{
    res.render('index', {
        url: '',
        status: 2
    })
}
})
app.post('/generate', async (req, res) => {
    let url = req.body.custom
    if (url == "") {
        url = nanoid(6)
    }
    if (await shrinkobj.findOne({ 'generatedUrl': url })) {
        res.redirect('/?url='+url+'&status=0&msg=The custom URL is already in use! Please use a new one or wait for it to expire.')
    }
    else {
        await shrinkobj.create({
            mainUrl: req.body.mainUrl,
            generatedUrl: url
        })
        res.redirect('/?url='+url+'&status=1')
    }
})
app.get('/:kek', async (req, res) => {
    const urlObj = await shrinkobj.findOne({ 'generatedUrl': req.params.kek })
    if (urlObj) res.redirect(urlObj.mainUrl)
    else {
        res.status(404);
        res.render('404');
    }
})


