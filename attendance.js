document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("attendanceForm");
    const tableBody = document.querySelector("#attendanceTable tbody");
  
    function loadAttendance() {
      const records = JSON.parse(localStorage.getItem("attendance") || "[]");
      tableBody.innerHTML = "";
  
      records.forEach(record => {
        const dateTime = new Date(record.timestamp);
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${record.empId}</td>
          <td>${dateTime.toLocaleDateString()}</td>
          <td>${dateTime.toLocaleTimeString()}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    form.addEventListener("submit", e => {
      e.preventDefault();
      const empId = document.getElementById("empId").value;
      const timestamp = document.getElementById("timestamp").value;
  
      const newRecord = { empId, timestamp };
  
      let attendance = JSON.parse(localStorage.getItem("attendance") || "[]");
      attendance.push(newRecord);
      localStorage.setItem("attendance", JSON.stringify(attendance));
  
      form.reset();
      loadAttendance();
    });
  
    loadAttendance();
  });
  