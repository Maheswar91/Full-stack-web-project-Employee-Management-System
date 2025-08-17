
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  document.getElementById("welcomeText").innerText = `Logged in as ${username} (${role})`;

  const navMenu = document.getElementById("navMenu");
  const links = {
    admin: ["employee.html", "payroll.html", "attendance.html", "leave.html"],
    hr: ["employee.html", "payroll.html", "attendance.html", "leave.html"],
    employee: ["leave.html"]
  };

  (links[role] || []).forEach(page => {
    const item = document.createElement("li");
    item.innerHTML = `<a href="${page}">${page.replace(".html", "").toUpperCase()}</a>`;
    navMenu.appendChild(item);
  });
});
