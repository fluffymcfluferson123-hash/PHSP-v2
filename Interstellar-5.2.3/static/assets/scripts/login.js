document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form")
  const loginForm = document.getElementById("login-form")

  function completeAuth(e) {
    e.preventDefault()
    localStorage.setItem("registered", "true")
    window.location.href = "/./as"
  }

  signupForm.addEventListener("submit", completeAuth)
  loginForm.addEventListener("submit", completeAuth)
})
