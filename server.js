module.exports = function (app) {
    app.get('/test', function(req, res) {
        res.json(200, {'test': 'it works!'})
    })
}