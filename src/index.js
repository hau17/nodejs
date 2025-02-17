//duong dan
const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
//template engine
//giúp truy cập file mà k cần qua route
app.use(express.static(path.join(__dirname, 'public')))

const { engine } = require('express-handlebars');
// cho biet da gui request toi server chua
app.use(morgan('combined'))
//template engine
app.engine('hbs', engine(
  {
    extname: '.hbs',
  }
))
app.set('view engine', 'hbs')
//dùng để xác định thư mục chứa các file view(file để render giao diện) , dirname 
// là đường dẫn tới thư mục chứa file index.js, sau đó chúng ta sử dụng phương thức path.join() 
// để nối thêm thư mục resources/views vào đường dẫn đó
app.set('views', path.join(__dirname, 'resources/views'))
// console.log("path la:",app.set('views', path.join(__dirname, 'resources/views')))
//route
//khi khong co file main , thi them nhu vay. render mac dinh o trong body cua file main.hbs
// app.get('/', (req, res) => {
//   res.render('home',{ layout:false});
// })
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
//127.0.0.1 - local host 

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`)
})
