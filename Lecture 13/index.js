const express = require('express')
const app = express()
const noteRoutes = require('./routes/noteRoutes')
const router = express.Router()

app.use(express.json())
app.use("/api",noteRoutes)


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})