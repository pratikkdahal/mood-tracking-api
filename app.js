
const express = require("express")
const mongoose = require("mongoose")
const dbConnect = require("./database/connection")

const app = express()
require("dotenv").config()

app.use(express.json())

// Connect to DB first, then start the server
dbConnect()


app.listen(3000,function(){
    console.log("Server has started at port 3000")
})

//   .then(() => {
//     app.listen(3000,function(){
//       console.log("Server has started at port 3000")
//     })
//   })
//   .catch(err => {
//     console.error("Failed to connect to DB:", err)
//     process.exit(1)
//   })



app.get("/", (req, res) => 
    res.send("Welcome to MoodTrack API")
)

