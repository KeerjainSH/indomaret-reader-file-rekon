// const Database = require("better-sqlite3")
// const path = require("path")

// const dbPath = "./recon.db"
// const db = new Database(dbPath)
// db.pragma("journal_mode = WAL")

const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'indomaret-rekon'
});


exports.db = db