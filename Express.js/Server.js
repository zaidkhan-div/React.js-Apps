const express = require('express')
const path = require('path')
const app = express() // instance of express
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(express.urlencoded())
app.use(express.json())
// app.use('/static', express.static('public'))
// app.use(express.static('public'))
app.use(express.static('files'))


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/login', (req, res) => {
   // console.log(req)
    const {username,password} = req.body;
     console.log(username,password);
    //console.log(' req.body', req.body)
   

    res.send('Welcome to login page')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })