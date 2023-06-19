var http=require('http');
var url=require('url');

http.createServer(function(req,res){
	
	var parsdUrl=url.parse(req.url,true);
	console.log(parsdUrl.query.name);
	//console.log(parsdUrl.query.cl);
	res.writeHead(200,{'content-type':'text/html'});
	res.write("Hello : "+parsdUrl.query.name);
	res.end();
	
}).listen(9000,function(){
	console.log("Server started at 9000");
});