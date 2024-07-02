const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("recon", {
  reconFtpFiles: (startDate, endDate) => ipcRenderer.send('recon_ftp_files', {startDate, endDate}),
  addFtpFilenameToDB: (filename) => ipcRenderer.send('add-ftp-filename-to-db', filename),
  fetchFileNamesFromDB: () => ipcRenderer.send('fetch-filenames-fromdb'),
  fetchLogUploadedFiles: (page) => ipcRenderer.send('fetch-log-uploaded-files', page),
  deleteFileNamesFromDB: (id) => ipcRenderer.send('delete-filenames-fromdb', id),
  uploadFileToFTP: (file) => ipcRenderer.send('upload-file', file),
  onFromIPCMain: (channel, cb) => ipcRenderer.on(channel, (event, ...args) => cb(event, ...args)),
  addReconEmailToDB: (recon, partner) => ipcRenderer.send('add-recon-email-to-db', {recon, partner}),
  fetchReconEmailFromDB: () => ipcRenderer.send('fetch-recon-email-fromdb'),
  fetchReconEmail: (startDate, endDate) => ipcRenderer.send('fetch-recon-email', {startDate, endDate}),
  deleteReconEmailFromDB: (id) => ipcRenderer.send('delete-recon-email-fromdb', id),
  exportToExcel: (name, reconData, reconDate) => ipcRenderer.send('export-to-excel', {name, reconData, reconDate})
})