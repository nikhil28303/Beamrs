function hashPin(pin) {
    return btoa(pin + "secureSalt");
}

function checkPin() {
    const storedHash = "MjgzMDNzZWN1cmVTYWx0"; // Hashed version of PIN 28303
    const userInput = document.getElementById("adminPin").value;
    const userHash = hashPin(userInput);

    if (userHash === storedHash) {
        document.getElementById("adminSection").style.display = "block";
        document.querySelector(".admin-container").style.display = "none";
        loadSiteCode();
    } else {
        alert("Incorrect PIN!");
    }
}

function updateSite() {
    const newCode = document.getElementById("siteCode").value;
    localStorage.setItem("siteContent", newCode);
    alert("Site content updated!");
    location.reload();
}

function loadSiteCode() {
    const saved = localStorage.getItem("siteContent") || "<h2>Welcome to Beamrs</h2>";
    document.getElementById("siteCode").value = saved;
}

window.onload = function () {
