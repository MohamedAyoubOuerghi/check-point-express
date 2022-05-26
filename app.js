const express = require('express')

const app = express()

const port = process.env.PORT || 5000
app.listen(port, err => {
    err ? console.log(err) : console.log(`The server is running on port ${port} ....`)
})