var express=require('express');
var app=express();
app.use(express.static('public'))
const staticfolder=express.static(path.join(__dirname,"public"));
app.use(staticfolder);
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"))

})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"aboutus.html"))
  
  })
  app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"))
  
  })
  app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"services.html"))
  
  })
app.listen(8000);
console.log("App is listening on port 8000");