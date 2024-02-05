const { config } = require('dotenv');
const express = require('express');
const app = express()

app.use((req,res,next)=>{
    if(req.method !== "GET" ){
        res.status(400).json({
            "Error" : "Use Only Get Method"
        })
    }else{
        console.log(req.method)
        next()
    }
})

app.get("/message",(req,res)=>{
    res.json({
        "message" : "Hello This is Amandeep Singh"
    })
})

require('dotenv').config()

let PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Running This on ${PORT}`)
})