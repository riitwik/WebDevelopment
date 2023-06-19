var exp = require('express');
var mysql = require('mysql2');
var cors = require('cors');
var bp = require('body-parser');
var app = exp();
app.use(cors())
//data received in req body is of type json
app.use(bp.json());

var con = mysql.createConnection({
	host:"localhost",
        user:"root",
	password:"qwerty@123",
	database:"dac"
})

con.connect(function(err){
	 if(!err)
	    console.log("Database Connected");
	 else
	    console.log("Database Connection Failed");		
})


app.get('/getEmps',function(req,res){
	con.query('select * from emp',function(err,result){
	      if(!err)
	      {		
	  	 //res.send(JSON.stringify(result));
		 res.json(result);
	      }		
	});
})


app.post('/insertEmp',function(req,res){
	
        var empid = req.body.EMPNO;
        var ename = req.body.ename;
        var sal = req.body.SAL;
	var dept = req.body.DEPTNO;

        var query = "insert into emp10(EMPNO,ENAME,SAL,DEPTNO) values (?,?,?,?)";	
	con.query(query,[empid,ename,sal,dept],function(err){
	    if(!err)
		res.send("insertion success");
	    else
		res.send("insertion failed");
       })

});



app.listen(9000, function() {
   console.log("express REST at 9000");
});