/* Welcome screen */
setTimeout(() => {
  document.getElementById("welcomeOverlay").remove();
}, 3000);

/* Map init */
const map = L.map('map').setView([28.3430, 76.7608], 18);

L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
).addTo(map);

L.marker([28.34361, 76.76000])
  .addTo(map)
  .bindPopup("🏫 Main Entrance")
  .openPopup();

/* Fix Leaflet resize */
setTimeout(() => {
  map.invalidateSize();
}, 300);

/* Panel logic */
const panel = document.getElementById("panel");
const panelList = document.getElementById("panelList");

const data = {
  buildings: ["Main Block", "Science Block", "Library", "Auditorium"],
  grounds: ["Playground", "Football Ground", "Basketball Court"]
};

function openPanel(type) {
  panelList.innerHTML = "";
  data[type].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    panelList.appendChild(li);
  });
  panel.classList.add("active");
}

document.getElementById("viewer").onclick = () => {
  panel.classList.remove("active");
};