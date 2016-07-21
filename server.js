var express=require("express");
var app=express();


var port=process.env.PORT || 3000;
app.listen(port, process.env.IP || "0.0.0.0", function(){
console.log('running on' +port);
});
