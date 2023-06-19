console.log("FileName is : " + __filename);
console.log("Name of Directory : "+__dirname);
console.log("Process id: "+process.pid);
console.log("Process Current Working Directory : "+process.cwd);

setTimeout(function(){ console.log("After 4 seconds!") },4000);