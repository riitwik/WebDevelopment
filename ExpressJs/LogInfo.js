var exp= require('express');
var app= exp();
var fs = require('fs');
var n=0;

app.get('*',function(req,res){
	fs.readFile('log.txt',function(err,data) {
	   if(!err)
	  {    
				var t= new Date();
                fs.appendFile('log.txt',"Log Info: "+ t +"  URL: Localhost:9000"+req.url+"\n" ,function(err1)
                { 
                 if(!err1)
                 console.log("writing success")
			 n++
                });
					res.send("Logged "+ n + "Requests");
	  }
	
       });
});
app.listen(9000,function() {console.log("SERVER STARTED")});