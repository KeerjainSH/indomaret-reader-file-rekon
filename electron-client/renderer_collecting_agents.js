flatpickr('#dateRange', {
    mode: 'range',
    onChange: async function(selectedDates, dateStr, instance) {
        if (selectedDates.length === 2) {
            const startDate = selectedDates[0];
            const endDate = selectedDates[1];

            const filesList = document.getElementById('filesList');
            const fileCount = document.getElementById('fileCount');
                        
            filesList.innerHTML = 'Fetching data ....';
            fileCount.textContent = '';
            await window.recon.reconFtpFiles(startDate, endDate)
        }
    }
});

window.recon.onFromIPCMain("result-list-file", (e, data) => {
    console.log(data)
    filesList.innerHTML = '';
    fileCount.textContent = '';
})
