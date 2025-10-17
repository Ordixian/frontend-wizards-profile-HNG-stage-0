// Live time in HH:MM format
const timeEl = document.getElementById("current-time");

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  timeEl.textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 60000);
