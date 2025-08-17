document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("payrollForm");
    const tableBody = document.querySelector("#payrollTable tbody");
  
    function loadPayrolls() {
      const payrolls = JSON.parse(localStorage.getItem("payrolls") || "[]");
      tableBody.innerHTML = "";
      payrolls.forEach(p => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${p.id}</td>
          <td>${p.salary}</td>
          <td>${p.deductions}</td>
          <td>${p.bonus}</td>
          <td>${p.net}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    form.addEventListener("submit", e => {
      e.preventDefault();
  
      const empId = document.getElementById("empId").value;
      const salary = parseFloat(document.getElementById("basicSalary").value);
      const deductions = parseFloat(document.getElementById("deductions").value);
      const bonus = parseFloat(document.getElementById("bonus").value);
  
      const net = salary - deductions + bonus;
  
      const record = { id: empId, salary, deductions, bonus, net };
  
      let payrolls = JSON.parse(localStorage.getItem("payrolls") || "[]");
      payrolls.push(record);
      localStorage.setItem("payrolls", JSON.stringify(payrolls));
  
      form.reset();
      loadPayrolls();
    });
  
    loadPayrolls();
  });
  