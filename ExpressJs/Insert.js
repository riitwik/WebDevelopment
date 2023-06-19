var exp= require('express');
var cors = require('cors');
var mysql= require('mysql2');
var bp= require('body-parser');
var app= exp();
app.use(cors())
app.use(bp.json());

var con= mysql.createConnection(
			{
				host:"localhost",
				user:"root",
				password:"qwerty@123",
				database:"dac"
			}
)

con.connect(function(err){
	if(!err)
		console.log("Database Connected");
	else
	    console.log("Database Connection Failed");
})

app.get('/getEmps',function(req,res){
	
	con.query('select * from emp', function(err,result){
		if(!err)
			res.json(result);
	});
});

app.post('/insertEmp',function(req,res){
			
			var empno = req.body.empno;
			var ename = req.body.ename;
			var sal = req.body.sal;
			var deptno = req.body.deptno;

        var query = "insert into emp(EMPNO,ENAME,SAL,DEPTNO) values (?,?,?,?)";	
		con.query(query,[empno,ename,sal,deptno],function(err){
	    if(!err)
			res.send("insertion success");
	    else
			res.send("insertion failed");
		});
});

app.listen(9000, function(){
	console.log("Express Rest at 9000");
});