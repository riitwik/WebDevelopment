var exp= require('express');
var app = exp();


app.get('/login',function(req,res){
	
	res.sendFile(__dirname+"/LoginFormGET.html");
});

app.get('/logincheck',function(req,res){
	if(req.query.UserID=="object" && req.query.UserPwd=="knowit")
		res.send("Login Successful!");
	else
		res.send("Login Failed!");

});

app.listen(9000,function(){
	console.log("Server Started at 9000");
	});