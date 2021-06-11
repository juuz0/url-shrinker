const {nanoid} = require('nanoid')
const create = require('../handlers/create')

module.exports = async (req, res, shrinkobj) => {
    let url = req.body.custom
    if (url == "") {
        url = nanoid(6)
    }
    if (await shrinkobj.findOne({ 'generatedUrl': url })) {
        res.redirect('/?url='+url+'&status=0&msg=The custom URL is already in use! Please use a new one or wait for it to expire.')
    }
    else {
        create(req.body.mainUrl, url, shrinkobj)
        res.redirect('/?url='+url+'&status=1')
    }
}