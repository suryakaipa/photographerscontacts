var express = require('express');
var app = express();


app.get('/mycontact', function(req, res){
	res.send("Hello");
});


app.listen(3000);
console.log("Server is running on port 3000");