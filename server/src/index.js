const express = require('express');
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const user = require("./routes/userRoute")
const product = require("./routes/secretRoute")

app.use("/api",user)
app.use("/api",product)

module.exports = app