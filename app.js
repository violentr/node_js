var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var list = ['a', 'b']
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({
  extname: '.hbs'
}));
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', '.hbs');
app.get('/', function (req, res) {
  res.render('index', {
    title: "hello from title",
    list: list
  });
});

app.listen(port, function (err) {
  console.log('running server on port', port);
});
