 var http = require('http');

 http.createServer(function(req, res){

    res.end("Servidor criado em NodeJs :)")

 }).listen(8080);

 console.log("O servidor está ativo")