var http= require('http');
var server= http.createServer(function(req,resp){

		resp.writeHead(200,{'content-type':'text/html'});
		resp.write("<h1> Hello From Node Js </h1>");
		resp.end();
		});

server.listen(9000, function(){
	console.log("server Started at Port 9000");
});