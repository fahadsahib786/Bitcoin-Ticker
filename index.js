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
    var amount=req.body.amount;

    var baseUrl="https://apiv2.bitcoinaverage.com/convert/global";
    var finalUrl=baseUrl+Crypto+Fiat;

   var Options = {
        url: "https://apiv2.bitcoinaverage.com/convert/global",
        method: "GET",
        qs:{
            from:
            to:
            amount: amount;
        }
    }

   request(Options, function (error,response,body) {
       var data=JSON.parse(body);
       var price=data.price;

       console.log(price);

       res.send("<h1>The Current price of "+Crypto+" is "+price+Fiat+"</h1>");


   });    
});

app.listen(3000,function () {
    console.log("Server running at port 3000.");
});