// npm i body-parser, axios, express
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/index.html')
    res.render('index')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})