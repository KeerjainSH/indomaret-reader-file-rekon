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

let founds = [];
let notFounds = [];

function openTab(tabId) {
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
    } else {
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
    if (!container) return;
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
})
