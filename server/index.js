const http =require("http")
const port=3000
const jsonobj=[
    {
        "what is nodeJs?":"NodeJS is a single threaded non blocking Operations.Node.js is an open-source, server-side JavaScript runtime environment that allows you to execute JavaScript code on the server."
    },
    {
        name:"akanksha",
        batch:"EA23",
        Course:"FullStack"
    }
    ,
    {
        name:"ak",
        batch:"EA23",
        Course:"FullStack"
    },
    {
        name:"akan",
        batch:"EA23",
        Course:"FullStack"
    },
    {
        name:"akank",
        batch:"EA23",
        Course:"FullStack"
    }

]
const app=http.createServer((req,res)=>{
   if(req.url=="/"){
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>What is NodeJS</h1>")
    res.write("<p>NodeJS is a single threaded non blocking Operations.</p>")
    res.write("<p> Node.js is an open-source, server-side JavaScript runtime environment that allows you to run JavaScript code on the server. It's designed for building scalable network applications and is known for its non-blocking, event-driven architecture, which makes it well-suited for handling real-time applications and APIs.</p>")
    res.write("<p></p>")
    res.write("</body>");
    res.write("</html>");
    res.end()
   }
   else if(req.url=="/post")
   {
    res.write("i m fine")
    res.end();

   }
   else if (req.url ==="/fetchAPI"){
    const data =JSON.stringify(jsonobj);
    res.write(data);
    res.end()
   }
   {
   
   }
})

app.listen(3000,()=>{
    console.log(`server is running in the port no.${port}`)
})
  