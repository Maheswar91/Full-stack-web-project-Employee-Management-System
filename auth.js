document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const role = document.getElementById("role").value;

  localStorage.setItem("username", username);
  localStorage.setItem("role", role);

  window.location.href = "dashboard.html";
});
