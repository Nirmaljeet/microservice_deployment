var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3001, function () {
  console.log('Example app listening on port 3001!. Congrats !');
  console.log('This is a random text');
  console.log('This is a new text');

});

