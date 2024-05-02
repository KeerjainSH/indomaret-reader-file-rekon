const flatpickr = require('flatpickr');
const { ipcRenderer } = require('electron');

const today = new Date();
flatpickr('#date-range', { defaultDate: today });

const form = document.getElementById('ftp-form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const dateRange = document.getElementById('date-range').value;
  const filenamePattern = document.getElementById('filename-pattern').value;

  // Send data to main process via IPC
  ipcRenderer.send('form-submit', { dateRange, filenamePattern });
});

ipcRenderer.on('file-count-update', (event, data) => {
  const { totalFiles, matchingFiles } = data;
  // Update UI elements in the renderer process based on received data
  document.getElementById('total-files').textContent = totalFiles;
  document.getElementById('matching-files').textContent = matchingFiles;
});