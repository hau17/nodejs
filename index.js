const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
// cho biet da gui request toi server chua
app.use(morgan('combined'))

//route
app.get('/', (req, res) => {
  res.send('<h1 style="color:red;"> Heloo</h1>')
})
//127.0.0.1 - local host 

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`)
})
