require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5500;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) =>{
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected!');
});

app.get('/api/savegame', (req, res) =>{
    const query = `
    mb.name AS main_business_name,
    `
})