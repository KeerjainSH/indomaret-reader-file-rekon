const mysql = require('mysql2/promise');

let pool;

const getPool = async () => {
  if (!pool) {
    pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'indomaret-rekon'
    });
  }
  return pool;
}

const createReconTable = async () => {
    try {
        const pool = await getPool();

        const createTableQuery = `
        CREATE TABLE IF NOT EXISTS recon_ftp (
            id INT AUTO_INCREMENT PRIMARY KEY,
            file_name VARCHAR(255) NOT NULL
          )
        `;
        await pool.query(createTableQuery);
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
//         db.query(createTableQuery);
//         console.log("Table 'recon_ftp_upload' is ready.");
//     } catch (err) {
//         console.error("Error creating table 'recon_ftp_upload':", err);
//         throw err;
//     }
// }

const createReconEmailTable = async() => {
    try {
      const pool = await getPool();

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS recon_email (
                id INTEGER AUTO_INCREMENT PRIMARY KEY,
                recon TEXT NOT NULL,
                partner TEXT NOT NULL
            )
        `;
        await pool.query(createTableQuery);
        console.log("Table 'recon_email' is ready.");
    } catch (err) {
        console.error("Error creating table 'recon_email':", err);
        throw err;
    }
}

const createLogSendFileFTPTable = async () => {
    try {
      const pool = await getPool();

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS log_send_file_ftp (
                id INTEGER AUTO_INCREMENT PRIMARY KEY,
                file_name TEXT NOT NULL,
                timestamp_utc TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await pool.query(createTableQuery);
        console.log("Table 'log_send_file_ftp' is ready.");
    } catch (err) {
        console.error("Error creating table 'log_send_file_ftp':", err);
        throw err;
    }
}

const readAllReconFile = async () => {
    try {
      const pool = await getPool();
      const query = `SELECT * FROM recon_ftp`;
      const [results] = await pool.query(query);
      return results;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

const insertReconFile = async (file_name) => {
    try {
      const pool = await getPool();

        const insertQuery = await pool.query(
            `INSERT INTO recon_ftp (file_name) VALUES ('${file_name}')`
        )
    } catch (err) {
        console.error(err)
        throw err
    }
}

const deleteReconFile = async (id) => {
    try {
        const pool = await getPool();

        const deleteQuery  = await pool.query(
            `DELETE FROM recon_ftp WHERE id=${id}`
        )
    } catch (err) {
        console.error(err)
        throw err
    }
}


const readAllReconEmail = async () => {
    try {
        const pool = await getPool();
        
        const query = `SELECT * FROM recon_email`;
        const [rows] = await pool.query(query);
        return rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const insertReconEmail = async (recon, partner) => {
    try {
        const pool = await getPool();

        const insertQuery = await pool.query(
            `INSERT INTO recon_email (recon, partner) VALUES ('${recon}', '${partner}')`
        )
    } catch (err) {
        console.error(err)
        throw err
    }
}

const deleteReconEmail = async(id) => {
    try {
        const pool = await getPool();

        const insertQuery = await pool.query(
            `DELETE FROM recon_email WHERE id=${id}`
        )
    } catch (err) {
        console.error(err)
        throw err
    }
}

const insertLogReconUploadFile = async (file_name) => {
    try {
        const insertQuery = await pool.query(
            `INSERT INTO log_send_file_ftp (file_name) VALUES ('${file_name}')`
        )
    } catch (err) {
        console.error(err)
        throw err
    }
}

const readLogReconUploadFile = async (pageNumber) => {
    const pageSize = 10;
    const offset = (pageNumber - 1) * pageSize;

    try {
        const pool = await getPool();

        const query = `SELECT * FROM log_send_file_ftp ORDER BY id DESC LIMIT ? OFFSET ?`;
        const [rows] = await pool.query(query,  [pageSize, offset]);
        return rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const countAllLogReconUploadFile = async () => {
    try {
        const pool = await getPool();

        const query = `SELECT count(*) as total FROM log_send_file_ftp;`;
        const [rows] = await pool.query(query);
        return rows;
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
    readLogReconUploadFile,
    countAllLogReconUploadFile
}