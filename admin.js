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
  alert("Site updated!");
  location.reload();
}

function loadSiteCode() {
  document.getElementById("siteCode").value =
    localStorage.getItem("siteContent") || "<h2>Welcome to BEAMRS</h2>";
}

window.onload = function () {
  const siteContent = document.getElementById("siteContent");
  if (siteContent) {
    siteContent.innerHTML =
      localStorage.getItem("siteContent") || "<h2>Welcome to BEAMRS</h2>";
  }

  const buttons = [
    {
      label: "Generator 1",
      link: "https://app.genn.lu/auth/beamrslol",
    },
    {
      label: "Generator 2",
      link: "https://ro.blox.com.pk/dashboard/?code=OTMzMzE2NTEwMjg3MTcyMDY5Ng==",
    },
  ];

  const container = document.getElementById("buttonsContainer");
  if (container) {
    buttons.forEach(btn => {
      const a = document.createElement("a");
      a.href = btn.link;
      a.innerText = btn.label;
      a.className = "button";
      a.target = "_blank";
      container.appendChild(a);
    });
  }
};
