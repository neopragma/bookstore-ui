var express = require('express')  
var app = express()  
app.set('view engine', 'pug')

app.get('/', function (req, res) {  
    res.render(
        'index',
        { title: 'Hey Hey Hey!', message: 'Yo Yo'})
})

app.listen(8081, function () {  
    console.log('Example app listening on port 8081!')
})