var exp = require('express');
var app = exp();

app.get('/home',function(req,res)
		{
			res.send("<h1> This is Home Page </h1>");
		});
		
app.get('/login',function(req,res)
		{
			res.sendFile(__dirname+"/loginForm.html");
		});		
		
app.get('/index',function(req,res)
		{
			res.write("<p> HTML and CSS</p>");
			res.write("<h3>JavaScript</h3>");
			res.write("JQuery");
			res.write("BootStrap");
			res.end();
		});

app.all('*',function(req,res)	
		{
			res.send("<h1> Invalid URL </h1>");
		});		
		
		app.listen(9001,function(){
			console.log("Server started at 9000");
		});