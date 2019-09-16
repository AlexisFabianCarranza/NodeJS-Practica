const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/assets',express.static('assets', {
  maxAge:'1h'
}));//middleware

app.get('/', function(req,res){
  res.render('index')
});

app.listen(3000);
