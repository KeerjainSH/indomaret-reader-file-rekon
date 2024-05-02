const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const jsftp = require('jsftp');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true,  // Enables Node.js integration in renderer process
      contextIsolation: false, // Disables context isolation for IPC communication (consider enabling later for security)
    },
  });

  win.loadFile('login.html'); // Or any other relevant HTML file

  ipcMain.on('form-submit', async (event, data) => {
    const { dateRange, filenamePattern } = data; // Destructure data from renderer

    const ftpClient = new jsftp({
      host: 'ftp://172.20.22.43/', // Replace with your FTP server details
      user: 'ftpstore',
      password: 'ftpstore',
    });

    try {
      await ftpClient.connect();

      let totalFiles = 0;
      let matchingFiles = 0;

      // Process files based on date range and pattern (replace with your logic)
      const files = await ftpClient.list('/');
      for (const file of files) {
        totalFiles++;
        if (filenamePattern && filenamePattern.match(file.name)) {
          matchingFiles++;
        }
      }

      // Send data back to renderer process
      win.webContents.send('file-count-update', { totalFiles, matchingFiles });
    } catch (error) {
      console.error('Error processing files:', error);
      // Handle errors appropriately (e.g., display error message to user)
    } finally {
      ftpClient.disconnect();
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});