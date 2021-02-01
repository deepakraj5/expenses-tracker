const express = require('express')
const userRoute = require('./routes/user')
const cors = require('cors')
require('dotenv').config()
require('./db/mongoose')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

app.use(userRoute)

app.listen(PORT, () => {
    console.log(`server upon server ${PORT}`)
})