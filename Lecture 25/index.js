const express = require("express")
const morgan = require("morgan")
const MongooseConnection = require("./config/db")
const app = express();
// const noteRoutes = require("./routes/noteRoutes")
app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(morgan("combined"))
// app.use("/api",noteRoutes)

const userRoutes = require("./routes/userRoutes")
app.use("/user",userRoutes)

MongooseConnection()
    .then(() => {
        app.listen(3000,()=>{
            console.log("Server is running on PORT 3000")
        })
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message)
    })