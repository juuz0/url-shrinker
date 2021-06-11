const {nanoid} = require('nanoid')
const create = require('../handlers/create')

module.exports = async (req, res, shrinkobj) => {
    if(req.query.custom) {
        create(req.query.main, req.query.custom, shrinkobj)
    }
    else {
        let url = nanoid(6)
        create(req.query.main, url, shrinkobj)
    }
    res.send('Done.')
}