// const Database = require("better-sqlite3")
// const path = require("path")

// const dbPath = "./recon.db"
// const db = new Database(dbPath)
// db.pragma("journal_mode = WAL")

const mysql = require('mysql2');

const db = mysql.createPool({
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  port:process.env.DB_PORT,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_DATABASE
});


exports.db = db