const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bell@1224",
    database: "employees_db"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;