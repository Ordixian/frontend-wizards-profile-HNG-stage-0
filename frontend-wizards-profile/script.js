function updateTime() {
  const timeEl = document.getElementById("current-time");
  timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
