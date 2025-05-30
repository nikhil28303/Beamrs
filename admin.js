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
    const generator = document.getElementById("newGenerator").value;
    const backup = document.getElementById("newBackup").value;
    const refresher = document.getElementById("newRefresher").value;

    // Ensure links are valid
    if (generator.startsWith("http") && backup.startsWith("http") && refresher.startsWith("http")) {
        localStorage.setItem("generatorLink", generator);
        localStorage.setItem("backupLink", backup);
        localStorage.setItem("refresherLink", refresher);
        alert("Links Updated!");
        location.reload(); // Reloads the page to apply new links
    } else {
        alert("Please enter valid URLs!");
    }
}

// Load stored links for main website dynamically
window.onload = function () {
    document.getElementById("generatorLink").href = localStorage.getItem("generatorLink") || "#";
    document.getElementById("backupLink").href = localStorage.getItem("backupLink") || "#";
    document.getElementById("refresherLink").href = localStorage.getItem("refresherLink") || "#";
};
