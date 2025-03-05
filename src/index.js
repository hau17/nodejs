//duong dan
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const route = require('./routes/indexRoute');
const db = require('./config/db');
db.connect();
//template engine
//giúp truy cập file mà k cần qua route
app.use(express.static(path.join(__dirname, 'public')));
//middleware, xu ly du lieu tu form gui len, giup req.body co du lieu
app.use(
    express.urlencoded({
        extended: true, // nếu true, req.body s�� chứa các giá trị của form như object, nếu false thì s�� chứa như string
    }),
);
//giup lay du lieu tu fetch, axios gui len
app.use(express.json());
const { engine } = require('express-handlebars');
// cho biet da gui request toi server chua
// app.use(morgan('combined'))
//template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
//dùng để xác định thư mục chứa các file view(file để render giao diện) , dirname
// là đường dẫn tới thư mục chứa file index.js, sau đó chúng ta sử dụng phương thức path.join()
// để nối thêm thư mục resources/views vào đường dẫn đó
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log("path la:",app.set('views', path.join(__dirname, 'resources/views')))
//route
//khi khong co file main , thi them nhu vay. render mac dinh o trong body cua file main.hbs
// app.get('/', (req, res) => {
//   res.render('home',{ layout:false});
// })
//action --> dispatcher --> function handler: khi dung duong dan->>
//  nho vao dispatcher->> chay function handler

route(app);

app.listen(port, () => {
    console.log(`app listening on port: http://localhost:${port}`);
});
