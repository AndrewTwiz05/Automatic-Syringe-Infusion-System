// Firebase Setup
const firebaseConfig = {
  apiKey: "AIzaSyC0X5Z8UdKVmHsdbHiWVjj3LN0Y8aa57Bk",
  authDomain: "syringepump-9fc29.firebaseapp.com",
  databaseURL: "https://syringepump-9fc29-default-rtdb.firebaseio.com",
  projectId: "syringepump-9fc29",
  storageBucket: "syringepump-9fc29.appspot.com",
  messagingSenderId: "490736507877",
  appId: "1:490736507877:web:70666d0a0af5d2121ced0c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// DOM Elements
const dosageInput = document.getElementById("dosage");
const flowrateInput = document.getElementById("flowrate");
const infuseBtn = document.getElementById("infuse-btn");
const defuseBtn = document.getElementById("defuse-btn");
const statusMessage = document.getElementById("status-message");
const manualModeBtn = document.getElementById("manual-mode");
const iotModeBtn = document.getElementById("iot-mode");

let currentMode = "manual"; // default mode

// Listen to Mode Change from Firebase
db.ref('/mode').on('value', (snapshot) => {
  const mode = snapshot.val();
  currentMode = mode;
  if (currentMode === "manual") {
    enableManualMode();
  } else if (currentMode === "iot") {
    enableIoTMode();
  }
});

// Switch to Manual Mode
manualModeBtn.addEventListener("click", () => {
  db.ref('/mode').set("manual");
});

// Switch to IoT Mode
iotModeBtn.addEventListener("click", () => {
  db.ref('/mode').set("iot");
  enableIoTMode();
});

// Enable Manual Mode UI
function enableManualMode() {
  dosageInput.disabled = false;
  flowrateInput.disabled = false;
  infuseBtn.disabled = false;
  defuseBtn.disabled = false;
  statusMessage.textContent = "Status: Ready for Manual Operation";
}

// Enable IoT Mode UI
function enableIoTMode() {
  dosageInput.disabled = true;
  flowrateInput.disabled = true;
  infuseBtn.disabled = true;
  defuseBtn.disabled = true;
  statusMessage.textContent = "Status: Connected to IoT Mode";
  
  // Listen for updates from Firebase in IoT Mode
  db.ref('/dosage').on('value', (snapshot) => {
    dosageInput.value = snapshot.val();
  });

  db.ref('/flowrate').on('value', (snapshot) => {
    flowrateInput.value = snapshot.val();
  });

  db.ref('/command').on('value', (snapshot) => {
    const command = snapshot.val();
    if (command === "infuse") {
      infusePump();
    } else if (command === "defuse") {
      defusePump();
    }
  });
}

// Handle Infusion
function infusePump() {
  statusMessage.textContent = "Infusing...";
  db.ref('/status').set("Infusing...");
  setTimeout(() => {
    statusMessage.textContent = "Infusion Complete!";
    db.ref('/status').set("Infusion Complete");
  }, 3000);
}

// Handle Defusion
function defusePump() {
  statusMessage.textContent = "Defusing...";
  db.ref('/status').set("Defusing...");
  setTimeout(() => {
    statusMessage.textContent = "Defusion Complete!";
    db.ref('/status').set("Defusion Complete");
  }, 3000);
}
