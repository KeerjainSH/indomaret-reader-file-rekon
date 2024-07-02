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

// const createReconUploadFileTable = () => {
//     try {
//         const createTableQuery = `
//             CREATE TABLE IF NOT EXISTS recon_ftp_upload (
//                 id INTEGER PRIMARY KEY AUTOINCREMENT,
//                 file_name TEXT NOT NULL,
//                 timestamp_utc TIMESTAMP DEFAULT CURRENT_TIMESTAMP

//             )
//         `;
//         db.exec(createTableQuery);
//         console.log("Table 'recon_ftp_upload' is ready.");
//     } catch (err) {
//         console.error("Error creating table 'recon_ftp_upload':", err);
//         throw err;
//     }
// }

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

const createLogSendFileFTPTable = () => {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS log_send_file_ftp (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                file_name TEXT NOT NULL,
                timestamp_utc TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        db.exec(createTableQuery);
        console.log("Table 'log_send_file_ftp' is ready.");
    } catch (err) {
        console.error("Error creating table 'log_send_file_ftp':", err);
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

const deleteReconFile = (id) => {
    try {
        const insertQuery = db.prepare(
            `DELETE FROM recon_ftp WHERE id=${id}`
        )

        const transaction = db.transaction(() => {
            const info = insertQuery.run();
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

const deleteReconEmail = (id) => {
    try {
        const insertQuery = db.prepare(
            `DELETE FROM recon_email WHERE id=${id}`
        )

        const transaction = db.transaction(() => {
            const info = insertQuery.run();
        })
        transaction()
    } catch (err) {
        console.error(err)
        throw err
    }
}

const insertLogReconUploadFile = (file_name) => {
    try {
        const insertQuery = db.prepare(
            `INSERT INTO log_send_file_ftp (file_name) VALUES ('${file_name}')`
        )

        const transaction = db.transaction(() => {
            const info = insertQuery.run()
            console.log(
                `Inserted ${info.changes} rows with last ID 
                 ${info.lastInsertRowid} into log_send_file_ftp`
            )
        })
        transaction()
    } catch (err) {
        console.error(err)
        throw err
    }
}

const readLogReconUploadFile = (pageNumber) => {
    const pageSize = 10;
    const offset = (pageNumber - 1) * pageSize;

    try {
        const query = `SELECT * FROM log_send_file_ftp ORDER BY id DESC LIMIT ? OFFSET ?`;
        const readQuery = db.prepare(query);
        const rowList = readQuery.all(pageSize, offset);
        return rowList;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


module.exports = {
    createReconTable,
    createReconEmailTable,
    createLogSendFileFTPTable,
    readAllReconFile,
    insertReconFile,
    deleteReconFile,
    readAllReconEmail,
    insertReconEmail,
    deleteReconEmail,
    insertLogReconUploadFile,
    readLogReconUploadFile
}