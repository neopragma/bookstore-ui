var express = require('express');
var path = require('path');
const routes = require('./routes');
var app = express();

app.locals.title = "The World's Smallest Bookstore";
app.locals.subtitle = "Let's get small!";


app.use('/', routes);
app.use(express.static('public'))
app.set("view engine", "pug");

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})


const PORT = process.env.PORT || 8081;
 
var server = app.listen(PORT, () => {
    var host = server.address().address
    var port = server.address().port
    console.log(`Server is listening on port ${PORT}`);
});
