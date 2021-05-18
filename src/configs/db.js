const mysql = require("mysql2");
const { DB_HOST, DB_USER, DB_PASSWORD } = require("../helpers/env");

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: "chatan2",
});

module.exports = connection;
