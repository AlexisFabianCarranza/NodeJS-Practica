const express = require('express');
const cookieSession = require('cookie-session');
const app = express();


app.use(cookieSession({
  name: 'session',
  keys: ['alexis1' , 'alexis']
}));

app.get('/', function(req,res){
  req.session.visits += 1;
  res.send(`${req.session.visits} visitas`);
});

app.listen(3000);
