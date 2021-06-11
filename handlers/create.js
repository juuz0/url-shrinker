
module.exports = async (main_url, url, shrinkobj) => {
    await shrinkobj.create({
        mainUrl: main_url,
        generatedUrl: url
    })
}
