var express = require('express'),
    path = require('path'),
    $ = require('jquery'),
    routes = require('./routes'),
    app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', routes.index);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.render('404');
});

app.listen(3000, function() {
    console.log('Now listening on port: 3000')
});
