var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){
	if(req.url=='/favicon.ico')
		return;
	var parsdUrl=url.parse(req.url,true);
	//var file=parsdUrl.pathname.substring(1);
	var file=parsdUrl.query.fname;
	//console.log(file)
	if(file!=undefined)
	{
	fs.readFile(file,function(err,data){
		res.writeHead(200,{'content-type':'text/html'});
		if(!err)
			res.write(data.toString());
		else
			res.write("Resource not Found");
		res.end();
	
	});
	}

}).listen(9000,function(){
		console.log("Listening at port 9000");
		});