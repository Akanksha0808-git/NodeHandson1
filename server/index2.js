const express=require("express");
const dummydata = require("./dummyData");
const cors=require("cors")
const arr=[]
const app=express();

app.use(cors({
    origin:"*"
}))
app.use(express.json())  //bodyParser
app.get("/",(req,res)=>{
    res.send("i m fine");
});
app.get("/fetchjson",(req,res)=>{
    res.send(dummydata);
});
app.post("/login",(req,res)=>{
    const data=req.body
    console.log(data)
    res.send(data)
    // res.send("here it is a login form");
})

app.listen(5000,()=>{
    console.log("server is running fine")
})