var exp=require('express');
var app=exp();

app.get('/',function(){
	resp.send("Welcome To ExpressJS!");
});

app.listen(9000,function(){
	
	console.log("Server Started at 9000");
});
