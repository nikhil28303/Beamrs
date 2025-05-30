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
    } else {
        alert("Incorrect PIN!");
    }
}

function updateLinks() {
    localStorage.setItem("generatorLink", document.getElementById("newGenerator").value);
    localStorage.setItem("backupLink", document.getElementById("newBackup").value);
    localStorage.setItem("refresherLink", document.getElementById("newRefresher").value);
    alert("Links Updated!");
}

// Load stored links for main website
document.getElementById("generatorLink").href = localStorage.getItem("generatorLink") || "#";
document.getElementById("backupLink").href = localStorage.getItem("backupLink") || "#";
document.getElementById("refresherLink").href = localStorage.getItem("refresherLink") || "#";
