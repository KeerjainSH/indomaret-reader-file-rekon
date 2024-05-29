let founds = [];
let notFounds = [];

flatpickr('#dateRange', {
    mode: 'range',
    onChange: async function(selectedDates, dateStr, instance) {
        if (selectedDates.length === 2) {
            const startDate = selectedDates[0];
            const endDate = selectedDates[1];

            document.getElementById("ftp-list").style.display = 'none';
            document.getElementById("loading").style.display = 'block';
            await window.recon.reconFtpFiles(startDate, endDate)
        }
    }
});

async function openTab(tabId) {
    var i, tabcontent, tabheaders;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tabheaders = document.getElementsByClassName("tab-header");
    for (i = 0; i < tabheaders.length; i++) {
        tabheaders[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
    document.querySelector(`.tab-header[onclick="openTab('${tabId}')"]`).classList.add("active");

    if (tabId === "tab1") {
        document.getElementById("files-found").style.display = 'block';
        document.getElementById("files-not-found").style.display = 'block';

         // Fill up Found List
        const foundContainer = document.getElementById("tab1");
        if (!foundContainer) return;
        const foundTableBody = foundContainer.querySelector("tbody");
        foundTableBody.innerHTML = "";
        founds.forEach((file, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${file.name}</td>
                <td>${file.lastModified || "-"}</td>
                <td>${file.size || "-" } KB</td>
            `;
            foundTableBody.appendChild(row);
        });
    } else if (tabId === "tab2") {
        document.getElementById("files-found").style.display = 'block';
        document.getElementById("files-not-found").style.display = 'block';

        // Fill up Not Found List
        const notFoundContainer = document.getElementById("tab2");
        if (!notFoundContainer) return;
        const notFoundTableBody = notFoundContainer.querySelector("tbody");
        notFoundTableBody.innerHTML = "";
        notFounds.forEach((name, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${name}</td>
            `;
            notFoundTableBody.appendChild(row);
        });
    } else {
        document.getElementById("files-found").style.display = 'none';
        document.getElementById("files-not-found").style.display = 'none';

        await window.recon.fetchFileNamesFromDB();

    }
}


window.recon.onFromIPCMain("result-list-file", (e, data) => {
    const {founds: dataFounds, notFounds: dataNotFounds} = data;
    founds = dataFounds;
    notFounds = dataNotFounds;

    document.getElementById("ftp-list").style.display = 'block';
    document.getElementById("loading").style.display = 'none';

    const found = document.getElementById("files-found");
    const notFound = document.getElementById("files-not-found");

    found.textContent = `Files Found: ${founds.length}`;
    notFound.textContent = `Files Not Found: ${notFounds.length}`

    // Fill up Found List
    const foundContainer = document.getElementById("tab1");
    if (!foundContainer) return;
    const foundTableBody = foundContainer.querySelector("tbody");
    foundTableBody.innerHTML = "";
    founds.forEach((file, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${file.name}</td>
            <td>${file.modifiedAt || "-"}</td>
            <td>${file.size || "-" } KB</td>
        `;
        foundTableBody.appendChild(row);
    });
})

window.recon.onFromIPCMain("result-ftp-filename-to-db", (e, data) => {
    const {error, fileNames, insertData} = data
    if (!error) {
        if (insertData) {
            alert("Filename inserted succesfully");
        }
        const container = document.getElementById("tab3");
        if (!container) return;
        const tableBody = container.querySelector("tbody");
        tableBody.innerHTML = "";

        fileNames.forEach((file, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${file.file_name}</td>
            `;
            tableBody.appendChild(row);
        });

    } else {
        alert("Something went wrong while fetching filenames...");
    }
})

async function insertFilename() {
    var input = document.getElementById("filename").value;
    if (input) {
        await window.recon.addFtpFilenameToDB(input);
        document.getElementById("filename").value = "";
    } else {
        alert("Please enter a string.");
    }
}
