var Express = require('express');
var app = new Express();
var routes = require('./routes');
var bodyParser = require('body-parser');
var morgan = require('morgan');


app.get('/', function(req,res,next) {
	console.log("Ya server is RUNNIN");
});

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests


// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send('Page does not exist'
    // ... fill in this part
  );
});
app.use(Express.static('/public'));

app.use('/', routes);

app.listen(8080);
