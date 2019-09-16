const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(req,res){
  res.send(`hola ${req.body.name}`)
});

app.listen(3000);
