const router = require('express').Router();
var unirest = require('unirest');

router.get("/", (req, res) => {
	res.render("index.pug");
});

router.get('/bookstore', function (req, res) {
    unirest.get('http://localhost:8080')
        .headers({'Accept': 'application/json'})
        .end(function (response) {
            res.render("bookstore-api.pug", {
            	apihelp : response.body
            })
        })    
})

module.exports = router;