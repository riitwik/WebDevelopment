var mysql=require('mysql2');
var exp=require('express');
var cors=require('cors');
var app= exp();
app.use(cors());
var con=mysql.createConnection({
	
	host:"localhost" ,
	user:"root" ,
	password:"qwerty@123" ,
	database:"project1"
	
});

con.connect(function(err){
	
	if(!err)
		console.log("Connected");
	else
		console.log("Connection Failed");
	
});

app.get('/patients',function(req,res){
	
	con.query("select * from patients",function(err,result){
		
				if(!err)
				{
					res.json(result);
					/*res.write("<table border=1>");
					
					result.forEach(function(valueof){
						res.write("<tr>");
						
							res.write("<td>"+valueof.patient_id+ "</td>");
							res.write("<td>"+valueof.first_name +"</td>");
							res.write("<td>"+valueof.last_name +"</td>");
							res.write("<td>"+valueof.gender +"</td>");
							res.write("<td>"+valueof.date_of_birth +"</td>");
							res.write("<td>"+valueof.contact_number +"</td>");
							res.write("<td>"+valueof.email +"</td>");
							res.write("<td>"+valueof.city +"</td>");
							res.write("<td>"+valueof.blood_group +"</td>");
							
						res.write("</tr>");
					});
				
					res.write("</table>");		
					res.end();	*/				
				}
	});
		     
});
		
app.all('*',function(req,res){
	res.send("URL incorrect")
});		

app.listen(9000,function(){
	console.log("Server Started at 9000");
});