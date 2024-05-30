const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("recon", {
  reconFtpFiles: (startDate, endDate) => ipcRenderer.send('recon_ftp_files', {startDate, endDate}),
  addFtpFilenameToDB: (filename) => ipcRenderer.send('add-ftp-filename-to-db', filename),
  fetchFileNamesFromDB: () => ipcRenderer.send('fetch-filenames-fromdb'),
  onFromIPCMain: (channel, cb) => ipcRenderer.on(channel, (event, ...args) => cb(event, ...args)),
  addReconEmailToDB: (recon, partner) => ipcRenderer.send('add-recon-email-to-db', {recon, partner}),
  fetchReconEmailFromDB: () => ipcRenderer.send('fetch-recon-email-fromdb'),
})