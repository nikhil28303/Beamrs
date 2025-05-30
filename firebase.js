// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB0h8cPBYndhms6t4pCyetfOsub3XFfMQw",
  authDomain: "beamrs-visitor-counter.firebaseapp.com",
  databaseURL: "https://beamrs-visitor-counter-default-rtdb.firebaseio.com",
  projectId: "beamrs-visitor-counter",
  storageBucket: "beamrs-visitor-counter.firebasestorage.app",
  messagingSenderId: "68828987806",
  appId: "1:68828987806:web:48e8aeb0b4b5ec5d36968f",
  measurementId: "G-9FS8HS8KLH"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Update and display counter
export function updateVisitorCount() {
  const counterRef = ref(db, "visitorCount");
  runTransaction(counterRef, current => (current || 0) + 1);
}

export function loadVisitorCount() {
  const counterRef = ref(db, "visitorCount");
  onValue(counterRef, snapshot => {
    const count = snapshot.val() || 0;
    document.getElementById("visitCount").textContent = count;
  });
}
