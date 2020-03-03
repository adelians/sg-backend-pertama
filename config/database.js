const mysql = require('mysql')

const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'study-group',
    multipleStatement: true
})

koneksi.connect(err => {
    if(err) throw err;
    console.log('Mysql Connected...');
})

module.exports = koneksi;