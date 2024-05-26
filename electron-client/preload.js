const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("recon", {
  reconFtpFiles: (startDate, endDate) => ipcRenderer.send('recon_ftp_files', {startDate, endDate}),
  onFromIPCMain: (channel, cb) => ipcRenderer.on(channel, (event, ...args) => cb(event, ...args))
})