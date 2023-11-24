var express=require("express")
var app=express()
var port=process.env.port||3000;

app.listen(port,()=>{
    console.log(`App listening to: ${port}`);
})

app.use(express.static(__dirname+"/"))

app.get("/", (req,res)=>{
    res.render("index.html")
});