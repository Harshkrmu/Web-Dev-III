require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const db = require("./config/db")
db();
const app = express();
app.use(express.json())
require("./models/user")
require("./models/note")
require("./models/book")


// const noteRoutes = require("./routes/noteRoutes")
// app.use(express.urlencoded({extended:true}))
// app.use(morgan("combined"))
// app.use("/api",noteRoutes)
// const userRoutes = require("./routes/userRoutes")
// app.use("/user",userRoutes)

const bookRoutes = require("./routes/bookRoutes")
app.use("/books",bookRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})