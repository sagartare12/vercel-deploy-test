const express = require("express")
const app= express()
// const cors = require('cors')

// app.use(cors())

app.listen(8080,()=>{
    console.log("Server is running")
})


app.get('/',(req,res)=>{
    res.send("hi server is connected")
})