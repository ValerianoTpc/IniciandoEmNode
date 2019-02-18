const express = require("express");
const app = express();


app.get("/", function(req, res){

    res.send("seja bem-vindo ao meu app!");

});

app.get("/sobre", function (req,res){

    res.send("Parte sobre o site!");

});


app.get("/Blog", function(req,res){

    res.send("Blog do Lucas!");
    1
});

app.get("/inicio/:nome/:cargo/:cor", function(req,res){

    res.send("<h1> Oi "+req.params.nome+"</h1>"+
     "<h2> Cargo:"+req.params.cargo+"</h2>"+
     "<h2> Cor favorita:"+req.params.cor+"</h2>");
})







app.listen(8080, function(){

    console.log("Servidor rodando na localhost");

});