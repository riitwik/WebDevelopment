var exp= require('express');
var app= exp();

app.use(exp.static('images'));

app.get('/image',function(req,res){
	res.sendFile(__dirname+"/LoginForm.html");
});
app.listen(9000,function(){
	console.log("Server started at 9000");
});