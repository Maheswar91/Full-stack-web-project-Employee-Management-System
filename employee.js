document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("addEmployeeForm");
    const tableBody = document.querySelector("#employeeTable tbody");
  
    function loadEmployees() {
      const employees = JSON.parse(localStorage.getItem("employees") || "[]");
      tableBody.innerHTML = "";
      employees.forEach(emp => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${emp.name}</td>
          <td>${emp.id}</td>
          <td>${emp.dept}</td>
          <td>${emp.role}</td>
          <td>${emp.salary}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    form.addEventListener("submit", e => {
      e.preventDefault();
      const newEmployee = {
        name: document.getElementById("empName").value,
        id: document.getElementById("empId").value,
        dept: document.getElementById("empDept").value,
        role: document.getElementById("empRole").value,
        salary: document.getElementById("empSalary").value,
      };
  
      let employees = JSON.parse(localStorage.getItem("employees") || "[]");
  
      // Check if Employee ID already exists
      if (employees.some(emp => emp.id === newEmployee.id)) {
        alert("Employee ID already exists!");
        return;
      }
  
      employees.push(newEmployee);
      localStorage.setItem("employees", JSON.stringify(employees));
      form.reset();
      loadEmployees();
    });
  
    loadEmployees();
  });
  