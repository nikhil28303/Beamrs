function hashPin(pin) {
    return btoa(pin + "secureSalt"); // Basic obfuscation; real hashing should be server-side
}

function checkPin() {
    const storedHash = "MjgzMDNzZWN1cmVTYWx0"; // Hashed version of PIN 28303
    const userInput = document.getElementById("adminPin").value;
    const userHash = hashPin(userInput);

    if (userHash === storedHash) {
        document.getElementById("adminSection").style.display = "block";
        document.querySelector(".admin-container").style.display = "none";
        loadSiteCode(); // Load stored site code
    } else {
        alert("Incorrect PIN!");
    }
}

function updateSite() {
    const newCode = document.getElementById("siteCode").value;
    localStorage.setItem("siteContent", newCode);
    alert("Site updated!");
    location.reload(); // Reload page to apply changes
}

function loadSiteCode() {
    document.getElementById("siteCode").value = localStorage.getItem("siteContent") || "<h2>Welcome to Beamrs</h2>";
}

window.onload = function () {
    document.getElementById("siteContent").innerHTML = localStorage.getItem("siteContent") || "<h2>Welcome to Beamrs</h2>";
};
