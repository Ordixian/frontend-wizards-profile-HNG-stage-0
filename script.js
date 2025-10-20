document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Fake form submission effect
      alert("Message sent successfully (fake, for demo)!");
      form.reset();
    });
  }
});
