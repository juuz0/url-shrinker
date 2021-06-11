module.exports = async (req,res,shrinkobj) => {
    const urlObj = await shrinkobj.findOne({ 'generatedUrl': req.params.kek })
    if (urlObj) res.redirect(urlObj.mainUrl)
    else {
        res.status(404);
        res.send('404. Not Found. Please check if the entered link is correct.');
    }
}