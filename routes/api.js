const express = require('express');
const mysql = require('mysql')
const databaseConfig = require('../config/database')
const connection = mysql.createConnection(databaseConfig)
const router = express.Router();

router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM tbl_todo_item', function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;
