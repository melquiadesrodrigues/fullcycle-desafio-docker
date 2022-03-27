const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: '12345',
    database:'fullcycle'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Melquíades')`
connection.query(sql)
connection.end()


app.get('/', async (req,res) => {
    people = await query('SELECT id, name FROM people')
    let list = "<ul>"
    people.forEach(person => {
        list += `<li>${person.id} - ${person.name}</li>`
    });
    list += "</ul>"
    res.send(`<h1>Full Cycle</h1> ${list}`)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

const mysql2 = require('mysql2/promise');
async function query(sql, params) {
    const connection = await mysql2.createConnection(config);
    const [results, ] = await connection.execute(sql, params);

    return results;
}