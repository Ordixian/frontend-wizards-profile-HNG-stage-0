// Get the time span element
const timeEl = document.getElementById("current-time");

// Function to update the time in HH:MM format
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  timeEl.textContent = `${hours}:${minutes}`;
}

// Initial display
updateTime();

// Update every minute
setInterval(updateTime, 60000);

// Avatar upload functionality
const avatarInput = document.getElementById("avatar-upload");
const avatarImg = document.getElementById("avatar-img");

avatarInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    avatarImg.src = reader.result;
  };
  reader.readAsDataURL(file);
});
