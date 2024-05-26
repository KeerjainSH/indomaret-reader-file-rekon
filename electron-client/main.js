const { app, BrowserWindow, ipcMain } = require('electron');
const { createReconTable, readAllReconFile, insertReconFile } = require('./helper/recon_manager');
const path = require('path');
const { Client } = require("basic-ftp");
const { fetchFilesFromFTP, checkingFiles } = require('./utils');

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

  // Load the index.html file
  mainWindow.loadFile(path.join(__dirname, 'login.html'));
  mainWindow.webContents.openDevTools()


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