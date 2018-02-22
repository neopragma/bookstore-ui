const router = require('express').Router();
var passport = require('passport');
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

// routes for login
//app.get('/',
//  function(req, res) {
//    res.render('home', { user: req.user });
//  });

router.get('/login',
  function(req, res){
    res.render('login');
  });
  
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
  
router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

router.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

module.exports = router;