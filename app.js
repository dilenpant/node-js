var http = require('http')
http.createServer(function(req,res){
res.write("Welcome :) !!")
res.end()

}).listen(8081);