// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getDatabase,
  ref,
  runTransaction,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB0h8cPBYndhms6t4pCyetfOsub3XFfMQw",
  authDomain: "beamrs-visitor-counter.firebaseapp.com",
  databaseURL: "https://beamrs-visitor-counter-default-rtdb.firebaseio.com",
  projectId: "beamrs-visitor-counter",
  storageBucket: "beamrs-visitor-counter.appspot.com",
  messagingSenderId: "68828987806",
  appId: "1:68828987806:web:48e8aeb0b4b5ec5d36968f",
  measurementId: "G-9FS8HS8KLH"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const countRef = ref(db, "visitorCount");

runTransaction(countRef, (current) => (current || 0) + 1);

onValue(countRef, (snapshot) => {
  const count = snapshot.val();
  document.getElementById("visitCount").innerText = count || 0;
});
