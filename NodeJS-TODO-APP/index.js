const fs = require("fs") ; 
const express = require("express") ; 
const { parse } = require("path");

const server = express() ; 
server.use(express.json())

server.get("/show-todos" , (req , res)=>{
    let data = fs.readFileSync("./db.json" , "utf-8")  ;
    let parseddata  = JSON.parse(data)
    res.send(`SUCCESSFULLY DATA IS SHOWN ${data} `)
})

server.post("/add-todos" , (req,res)=>{
    let data = req.body ; 
    let userdata = fs.readFileSync("./db.json" , "utf-8") ; 
    let parseddata = JSON.parse(userdata) ; 
    parseddata.todos.push(data) ; 
    fs.writeFileSync("./db.json" , JSON.stringify(parseddata)) 
    res.send(`DATA SUCCESSFULLY RECIEVED `)
})

server.put("/evenid" , (req,res)=>{
    // let data = req.body; 
    let userdata = fs.readFileSync("./db.json"  , "utf-8") ; 
    let parseddata = JSON.parse(userdata) ; 

    parseddata.todos.forEach(todo => {
        if(todo.id%2==0 && todo.status === false ){
            todo.status = true ; 
        } 
       
    });
   let updated =  fs.writeFileSync("./db.json" ,JSON.stringify(parseddata)) ; 
    res.send(`status is converted to true ${parseddata.todos} `)
})

server.delete("/delete-false" , (req,res)=>{
    let userdata = fs.readFileSync("./db.json" , "utf-8") ; 
    let parseddata = JSON.parse(userdata) ; 

    let trueStatu = parseddata.todos.filter(todo=> todo.status !== false ) ; 
    let deleted = parseddata.todos.filter(todo=> todo.status === false ) ; 

    parseddata.todos = trueStatu ; 

    fs.writeFileSync("./db.json" , JSON.stringify(parseddata)) ; 
    res.send(`Status FAlse Data has been deletedn ${parseddata} `)
})

server.listen(3001, ()=>{
    console.log("server 3001 is runnign ")
})


