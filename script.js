// script.js

// ✅ Time updater
function updateTime() {
  const timeElement = document.getElementById("current-time");
  if (!timeElement) return;

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  timeElement.textContent = formattedTime;
}

// Update immediately and every 60 seconds
updateTime();
setInterval(updateTime, 60000);

// ✅ Contact form handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simulate a fake submission (Stage 1 behavior)
      alert("Message sent successfully (fake, for demo)!");
      form.reset();
    });
  }
});
