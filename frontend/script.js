//Auto changing motto section
const mottos = [
    "Secure by design, slay by default",
    "Pipelines polished, deployments flawless",
    "Automated, orchestrated, and absolutely iconic",
    "DevSecOps but make it cute",
    "Certified girly pops giving mother, serving excellence, crumbs extinct, maximum slay",
];

let mottoIndex = 0;

function rotateMotto() {
    const mottoElement = document.getElementById("motto");

    if (!mottoElement) return;

    mottoIndex = (mottoIndex + 1) % mottos.length;
    mottoElement.textContent = mottos[mottoIndex];
}

setInterval(rotateMotto, 3000);

//Live time section
function updateTime() {
    const timeElement = document.getElementById("time");

    if (!timeElement) return;

    const now = new Date();
    timeElement.textContent = "Current time: " + now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);

// Health check button connects to server.js
function getHealth() {
    fetch('/health')
        .then(res => res.json())
        .then(data => {
            document.getElementById('output').textContent =
                JSON.stringify(data, null, 2);
        });
}

// API status button also connecting to server.js
function getStatus() {
    fetch('/api/status')
        .then(res => res.json())
        .then(data => {
            document.getElementById('output').textContent =
                JSON.stringify(data, null, 2);
        });
}