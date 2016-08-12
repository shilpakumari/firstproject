var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('POST request to homepage');
});

app.get('/shilpa', function(req, res){
  res.send('what are u doing');
});

app.get('/pdf', function(req, res){
res.download('Shilpa.docx', function(err){
  if (err) {
    console.log("error in downloading")
  
  } else {
      console.log("downloading.................")
  }
});
});


app.listen(3000,function(req,res){
	console.log("listens on 3000")
});

