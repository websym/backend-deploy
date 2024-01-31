const express = require('express')

const app = express()

const PORT=3000

app.get('/', (req, res) => {
    res.send("हेलो वर्लड म नेपालगंज बाट")
})

app.listen(PORT, (req, res) => {
    console.log(`listening on ${PORT}`)
})