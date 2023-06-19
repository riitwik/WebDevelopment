var ut= require('./utilites.js');
var http=require('http');

http.createServer(function(req,resp){
	resp.writeHead(200,{'content-type':'text/html'});
	resp.write("Number 11 is prime? "+ ut.isPrime(11)+"<br>");
	resp.write("Factorial of 5 is: "+ ut.calFact(5)+"<br>");
	resp.write("Is 6 a perfect Number? :"+ut.isPerfect(6)+"<br>");
	resp.end();
}).listen(9000,function(){
	console.log("Server started at 9000");
});


console.log("Number 11 is prime? "+ ut.isPrime(11));
console.log("Factorial of 5 is: "+ ut.calFact(5));
console.log("Is 6 a perfect Number? :"+ut.isPerfect(6));