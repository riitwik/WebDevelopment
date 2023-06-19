var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){
	
	var parsdUrl=url.parse(req.url,true);
	file=parsdUrl.query.fname;
	res.writeHead(200,{'content-type':'text/html'});
	fs.readFile(file,function(err,data){
		if(!err)
			res.write(data.toString());
		else
			res.write("Resource not Found");
		res.end();
	});

}).listen(9000,function(){
		console.log("Listening at port 9000");
		});