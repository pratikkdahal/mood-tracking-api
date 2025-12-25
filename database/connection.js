const mongoose = require("mongoose")

async function dbConnect(){
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log("Database Connected Successfully!!")
}

// async function dbConnect(){
//     const uri = process.env.CONNECTION_STRING
//     if (!uri) {
//         throw new Error("CONNECTION_STRING is not set in environment")
//     }

//     try {
//         await mongoose.connect(uri)
//         console.log("Database Connected Successfully!!")
//     } catch (err) {
//         console.error("Database connection error:", err)
//         throw err
//     }
// }

module.exports = dbConnect