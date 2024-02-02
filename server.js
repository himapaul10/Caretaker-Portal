const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

const connection = mysql.createConnection({
    host: 'caretaker-portal.c5888ae8yqbj.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'AnikaAWS123',
    database: 'Caretakerportal',
    port: '3306'
});

connection.connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/careteam', (req, res) => {
    const query = 'SELECT * FROM careteam';
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.get('/api/conditions', (req, res) => {
    const query = 'SELECT * FROM conditions';
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.get('/api/medication', (req, res) => {
    const query = 'SELECT * FROM medication';
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.get('/api/patients', (req, res) => {
    const query = 'SELECT * FROM patients';
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.on('close', () => {
    connection.end();
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
