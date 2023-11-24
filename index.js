const express = require("express")
const app= express()
// const cors = require('cors')

// app.use(cors())
const PORT = process.env.PORT || 8080;

app.listen(PORT ,()=>{
    console.log("Server is running")
})


app.get('/',(req,res)=>{
    res.send("hi server is connected")
})


module.exports = app