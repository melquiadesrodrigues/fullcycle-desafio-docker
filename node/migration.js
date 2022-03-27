const config = {
    host: 'mysql',
    user: 'root',
    password: '12345',
    database:'fullcycle'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query("CREATE TABLE IF NOT EXISTS people (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NULL, PRIMARY KEY (`id`));")
connection.end()