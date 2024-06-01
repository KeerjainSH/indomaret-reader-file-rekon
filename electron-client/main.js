const { app, BrowserWindow, ipcMain } = require('electron');
const { createReconTable, readAllReconFile, insertReconFile, createReconEmailTable,createLogSendFileFTPTable, insertReconEmail, readAllReconEmail, deleteReconEmail, deleteReconFile } = require('./helper/recon_manager');
const path = require('path');
const { Client } = require("basic-ftp");
const { fetchFilesFromFTP, checkingFiles, sendFileToFTP } = require('./utils');
const { getEmails } = require('./helper/email_helper');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  // Setup DB
  createReconTable();
  createReconEmailTable();
  createLogSendFileFTPTable();

  // Load the index.html file
  mainWindow.loadFile(path.join(__dirname, 'login.html'));
  mainWindow.webContents.openDevTools();
  getEmails();


  // Handle window close event
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

ipcMain.on('recon_ftp_files', async (e, date) => {
  const { startDate, endDate } = date
  const client = new Client();
  const ftpFiles = await fetchFilesFromFTP(client);
  const fileNames = readAllReconFile();
  const result = checkingFiles(ftpFiles, fileNames, startDate, endDate);

  mainWindow.webContents.send('result-list-file', result)

});

ipcMain.on('add-ftp-filename-to-db', (e, filename) => {
  let fileNames = [];
  try {
    insertReconFile(filename);
    fileNames = readAllReconFile();
    mainWindow.webContents.send('result-ftp-filename-to-db', {insertData: true, error: false, fileNames: fileNames});
  } catch (error) {
    mainWindow.webContents.send('result-ftp-filename-to-db', {insertData: true, error: true, fileNames: fileNames});
  }
});

ipcMain.on('fetch-filenames-fromdb', (e, data) => {
  let fileNames = [];
  try {
    fileNames = readAllReconFile();
    mainWindow.webContents.send('result-ftp-filename-to-db', {insertData: false, error: false, fileNames: fileNames});
  } catch (error) {
    mainWindow.webContents.send('result-ftp-filename-to-db', {insertData: false, error: true, fileNames: fileNames})
  }
});


ipcMain.on('delete-filenames-fromdb', (e, id) => {
  let fileNames = [];

  try {
    deleteReconFile(id);

    fileNames = readAllReconFile();
    mainWindow.webContents.send('result-ftp-filename-to-db', {insertData: false, error: false, fileNames: fileNames});
  } catch (error) {
    console.log("from main", error)
    mainWindow.webContents.send('result-ftp-filename-to-db', {insertData: false, error: true, fileNames: fileNames});
  }
})

ipcMain.on('upload-file', async (e, file) => {
  const client = new Client();
  try {
    const remoteFilePath = path.basename(file);
    console.log('Uploading file to FTP:', file, remoteFilePath)
    await sendFileToFTP(client, file, remoteFilePath);
    mainWindow.webContents.send('upload-file-to-ftp-result', { success: true, localFilePath: file, remoteFilePath });
  } catch (error) {
    console.error('Failed to upload file to FTP:', error);
    mainWindow.webContents.send('upload-file-to-ftp-result', { success: false, error: error.message });
  }
})

ipcMain.on('add-recon-email-to-db', (e, {recon, partner}) => {
  let recons = [];

  try {
    insertReconEmail(recon, partner);
    recons = readAllReconEmail();
    mainWindow.webContents.send('result-recon-email-from-db', {insertData: true, error: false, recons: recons});
  } catch (error) {
    mainWindow.webContents.send('result-recon-email-from-db', {insertData: true, error: true, recons: recons});
  }
});

ipcMain.on('fetch-recon-email-fromdb', (e, data) => {
  let recons = [];

  try {
    recons = readAllReconEmail();
    mainWindow.webContents.send('result-recon-email-from-db', {insertData: false, error: false, recons: recons});
  } catch (error) {
    mainWindow.webContents.send('result-recon-email-from-db', {insertData: false, error: true, recons: recons});
  }
});

ipcMain.on('delete-recon-email-fromdb', (e, id) => {
  let recons = [];

  try {
    deleteReconEmail(id);

    recons = readAllReconEmail();
    mainWindow.webContents.send('result-recon-email-from-db', {insertData: false, error: false, recons: recons});
  } catch (error) {
    console.log("from main", error)
    mainWindow.webContents.send('result-recon-email-from-db', {insertData: false, error: true, recons: recons});
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
  watch: ['js', 'html', 'css']
});