// Dynamic current time
const timeEl = document.getElementById("current-time");
function updateTime() {
  timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// Avatar upload
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
