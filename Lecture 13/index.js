const express = require('express')
const morgan = require('morgan')
const app = express()
const noteRoutes = require('./routes/noteRoutes')
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(morgan('dev'))
app.use(morgan('combined'))



app.use("/api",noteRoutes)


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})