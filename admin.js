function hashPin(pin) {
  return btoa(pin + "secureSalt");
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
  alert("Site content updated!");
  location.reload();
}

function loadSiteCode() {
  const saved = localStorage.getItem("siteContent") || "<h2>Welcome to Beamrs</h2>";
  document.getElementById("siteCode").value = saved;
}

// Visitor counter (local only)
function countVisitor() {
  if (!sessionStorage.getItem("hasVisited")) {
    let visits = parseInt(localStorage.getItem("visitCount") || "0");
    visits++;
    localStorage.setItem("visitCount", visits);
    sessionStorage.setItem("hasVisited", "true");
  }

  const counter = document.getElementById("visitCount");
  if (counter) {
    counter.textContent = localStorage.getItem("visitCount") || "0";
  }
}

window.onload = function () {
  if (!location.pathname.includes("admin")) {
    const content = localStorage.getItem("siteContent");
    if (content) {
      const container = document.getElementById("siteContent");
      if (container) {
        container.innerHTML = content;
      }
    }
    countVisitor();
  }
};
