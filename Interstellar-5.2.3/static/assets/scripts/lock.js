document.addEventListener("DOMContentLoaded", () => {
  const registered = localStorage.getItem("registered") === "true"
  if (!registered) {
    const overlay = document.getElementById("lock-screen")
    if (overlay) overlay.style.display = "flex"
  }
})
