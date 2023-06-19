var http= require('http');
var url= require('url');

http.createServer(function(request,resp){
	var url_p= url.parse(request.url,true);
	console.log(url_p.query.name);
	console.log(url_p.query.cl);
	cl=url_p.query.cl;
	
	resp.writeHead(200,{'content-type':'text/html'});
	resp.write("<h1 style='color:"+cl+"'> Welcome to Node Js </h1>")
	resp.end();
}).listen(9000,function(){
	console.log("This is port 9000");
});