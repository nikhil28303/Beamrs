function hashPin(pin) {
    return btoa(pin + "secureSalt"); // Basic obfuscation (not real security)
}

function checkPin() {
    const storedHash = "MjgzMDNzZWN1cmVTYWx0"; // 28303 + "secureSalt"
    const userInput = document.getElementById("adminPin").value;
    const userHash = hashPin(userInput);

    if (userHash === storedHash) {
        sessionStorage.setItem("isAdmin", "true");
        showAdminPanel();
    } else {
        alert("Incorrect PIN!");
    }
}

function showAdminPanel() {
    document.getElementById("adminSection").style.display = "block";
    document.querySelector(".admin-container").style.display = "none";
    loadSiteCode();
}

function updateSite() {
    const newCode = document.getElementById("siteCode").value;
    localStorage.setItem("siteContent", newCode);
    alert("Site updated!");
    location.reload(); // Refresh to apply content
}

function loadSiteCode() {
    document.getElementById("siteCode").value =
        localStorage.getItem("siteContent") || "<h2>Welcome to Beamrs</h2>";
}

window.onload = function () {
    if (location.pathname.includes("admin")) {
        if (sessionStorage.getItem("isAdmin") === "true") {
            showAdminPanel();
        }
    } else {
        document.getElementById("siteContent").innerHTML =
            localStorage.getItem("siteContent") || "<h2>Welcome to Beamrs</h2>";
    }
};
