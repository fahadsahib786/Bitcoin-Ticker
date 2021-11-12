const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/index.html");
});


app.post("/",function (req,res) {

    var Crypto=req.body.Crypto;
    var Fiat=req.body.Fiat;

    var baseUrl="https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    var finalUrl=baseUrl+Crypto+Fiat;


   request(finalUrl, function (error,response,body) {
       var data=JSON.parse(body);
       var price=data.last;

       res.send("<h1>The Current price of "+Crypto+" is "+price+Fiat+"</h1>");


   });    
});

app.listen(3000,function () {
    console.log("Server running at port 3000.");
});