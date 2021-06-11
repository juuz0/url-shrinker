module.exports = (req, res) => {
    let url = req.query.url
    let status = req.query.status
    if (status == 0) {
        let msg = req.query.msg
        res.render('index', {
            url: url,
            status: status,
            msg: msg
        })
    }
    else if (status == 1) {
        res.render('index', {
            url: url,
            status: status
        })
    }
    else {
        res.render('index', {
            url: '',
            status: 2
        })
    }
}