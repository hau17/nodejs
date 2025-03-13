const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!', error);
    }
}

module.exports = { connect };

// const mysql = require('mysql')
// async function connect(){
//     const connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'f8'
//     })
//     try {
//         connection.connect()
//         console.log('Connected successfully');
//     } catch (error) {
//         console.error('Error connecting');
//     }
// }
// module.exports = {connect}
