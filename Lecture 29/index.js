require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const db = require("./config/db")
const app = express();
app.use(express.json())
// const noteRoutes = require("./routes/noteRoutes")
// app.use(express.urlencoded({extended:true}))
// app.use(morgan("combined"))
// app.use("/api",noteRoutes)

db();

const userRoutes = require("./routes/userRoutes")
app.use("/user",userRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})