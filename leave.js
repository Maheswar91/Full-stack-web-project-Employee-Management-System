document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("leaveForm");
    const tableBody = document.querySelector("#leaveTable tbody");
  
    function loadLeaves() {
      const leaves = JSON.parse(localStorage.getItem("leaves") || "[]");
      tableBody.innerHTML = "";
  
      leaves.forEach(l => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${l.empId}</td>
          <td>${l.fromDate}</td>
          <td>${l.toDate}</td>
          <td>${l.leaveType}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    form.addEventListener("submit", e => {
      e.preventDefault();
  
      const leave = {
        empId: document.getElementById("empId").value,
        fromDate: document.getElementById("fromDate").value,
        toDate: document.getElementById("toDate").value,
        leaveType: document.getElementById("leaveType").value,
      };
  
      const leaves = JSON.parse(localStorage.getItem("leaves") || "[]");
      leaves.push(leave);
      localStorage.setItem("leaves", JSON.stringify(leaves));
  
      form.reset();
      loadLeaves();
    });
  
    loadLeaves();
  });
  