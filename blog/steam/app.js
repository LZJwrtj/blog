var express = require('express')
var axios = require('axios')

var app = express()

app.get('/api/getData', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    var url = 'http://api.steampowered.com/IDOTA2Match_570/GetLeagueListing/v1?key=6D7A52CD3D21C352CE3AC33A2DCF1A78'
    axios.get(url).then(function (response) {
        res.send(response.data)
    })
}).listen(3000, function () {
    console.log('server is running at http://127.0.0.1:3000')
})