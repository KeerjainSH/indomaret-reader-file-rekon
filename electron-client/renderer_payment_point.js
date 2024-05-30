flatpickr('#dateRangeReconPP', {
    mode: 'range',
    onChange: async function(selectedDates, dateStr, instance) {
        if (selectedDates.length === 2) {
            const startDate = selectedDates[0];
            const endDate = selectedDates[1];

            document.getElementById("loading-recon-pp").style.display = 'block';
        }
    }
});

async function openTabReconPP(tabId) {
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
    document.querySelector(`.tab-header[onclick="openTabReconPP('${tabId}')"]`).classList.add("active");

    if (tabId === "reconTab1") {
        document.getElementById("files-found").style.display = 'block';
        document.getElementById("files-not-found").style.display = 'block';
        document.getElementById("filter").style.display = 'block';

    } else {
        document.getElementById("files-found").style.display = 'none';
        document.getElementById("files-not-found").style.display = 'none';
        document.getElementById("filter").style.display = 'none';

        await window.recon.fetchReconEmailFromDB();

    }
}

async function insertReconPP() {
    var recon = document.getElementById("recon").value;
    var partner = document.getElementById("partner").value;
    if (recon && partner) {
        await window.recon.addReconEmailToDB(recon, partner);
        document.getElementById("recon").value = "";
        document.getElementById("partner").value = "";
    } else {
        alert("Please enter a string.");
    }
}

async function deleteItemReconEmail(id) {
    const confirmed = confirm("Are you sure you want to delete this item?");
    if (confirmed) {
        await window.recon.deleteReconEmailFromDB(id);
    }
}

window.recon.onFromIPCMain("result-recon-email-from-db", (e, data) => {
    const {error, recons, insertData} = data;

    if (error && !insertData) {
        alert("Something went wrong while fetching data...");
    }

    if (error && insertData) {
        alert("Failed to insert...");
    }
    if (!error && insertData) {
        alert("Recon email inserted succesfully");
    }

    const container = document.getElementById("reconTab2");
    if (!container) return;
    const tableBody = container.querySelector("tbody");
    tableBody.innerHTML = "";

    recons.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.recon}</td>
            <td>${item.partner}</td>
            <td><button class="btn-delete" id="delete-${item.id}" onclick="deleteItemReconEmail(${item.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
});