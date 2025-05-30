function hashPin(pin) {
  return btoa(pin + "secureSalt"); // basic obfuscation
}

function checkPin() {
  const storedHash = "MjgzMDNzZWN1cmVTYWx0"; // PIN: 28303
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
  alert("Site updated!");
  location.reload();
}

function loadSiteCode() {
  document.getElementById("siteCode").value =
    localStorage.getItem("siteContent") || "<h2>Welcome to Beamrs</h2>";
}

window.onload = function () {
  const contentContainer = document.getElementById("siteContent");
  if (contentContainer) {
    contentContainer.innerHTML =
      localStorage.getItem("siteContent") || "<h2>Welcome to Beamrs</h2>";
  }
};
