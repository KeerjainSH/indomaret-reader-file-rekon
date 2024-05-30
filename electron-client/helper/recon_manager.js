const dbmgr = require("./db_manager")
const db = dbmgr.db

const createReconTable = () => {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS recon_ftp (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                file_name TEXT NOT NULL
            )
        `;
        db.exec(createTableQuery);
        console.log("Table 'recon_ftp' is ready.");
    } catch (err) {
        console.error("Error creating table 'recon_ftp':", err);
        throw err;
    }
}

const createReconEmailTable = () => {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS recon_email (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                recon TEXT NOT NULL,
                partner TEXT NOT NULL
            )
        `;
        db.exec(createTableQuery);
        console.log("Table 'recon_email' is ready.");
    } catch (err) {
        console.error("Error creating table 'recon_email':", err);
        throw err;
    }
}

const readAllReconFile = () => {
    try {
        const query = `SELECT * FROM recon_ftp`;
        const readQuery = db.prepare(query);
        const rowList = readQuery.all();
        return rowList;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const insertReconFile = (file_name) => {
    try {
        const insertQuery = db.prepare(
            `INSERT INTO recon_ftp (file_name) VALUES ('${file_name}')`
        )

        const transaction = db.transaction(() => {
            const info = insertQuery.run()
            console.log(
                `Inserted ${info.changes} rows with last ID 
                 ${info.lastInsertRowid} into recon_ftp`
            )
        })
        transaction()
    } catch (err) {
        console.error(err)
        throw err
    }
}

const readAllReconEmail = () => {
    try {
        const query = `SELECT * FROM recon_email`;
        const readQuery = db.prepare(query);
        const rowList = readQuery.all();
        return rowList;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const insertReconEmail = (recon, partner) => {
    try {
        const insertQuery = db.prepare(
            `INSERT INTO recon_email (recon, partner) VALUES ('${recon}', '${partner}')`
        )

        const transaction = db.transaction(() => {
            const info = insertQuery.run()
            console.log(
                `Inserted ${info.changes} rows with last ID 
                 ${info.lastInsertRowid} into recon_email`
            )
        })
        transaction()
    } catch (err) {
        console.error(err)
        throw err
    }
}

module.exports = {
    createReconTable,
    createReconEmailTable,
    readAllReconFile,
    insertReconFile,
    readAllReconEmail,
    insertReconEmail
}