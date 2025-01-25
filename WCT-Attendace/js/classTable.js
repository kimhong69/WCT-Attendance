function fetchClasses() {
  fetch('http://localhost:3001/classes')
    .then(response => {
      console.log('API Response:', response);
      return response.json();
    })
    .then(data => {
      console.log('Class Data:', data);

      const tableBody = document.getElementById('class-table-body');
      tableBody.innerHTML = ''; // Clear any existing rows

      // Populate table with class data
      data.forEach((classItem, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${classItem.class_id}</td>
          <td>${classItem.class_name}</td>
          <td>${classItem.start_date}</td>
          <td>${classItem.class_days ? JSON.parse(classItem.class_days).length : '0'}</td>
          <td><span class="status-pill">${classItem.status === 1 ? 'Active' : 'Inactive'}</span></td>
          <td class="actions">
            <a href="class-detail.html"><i class="ri-eye-line"><span> Detail</span></i></a>
            <a class="open-btn" onclick="openSidebar()"><i class="ri-qr-code-line"><span> Get QR</span></i></a>
            <i class="ri-edit-2-line"><span> Edit</span></i>
            <i class="ri-delete-bin-line delete-icon"><span> Delete</span></i>
          </td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(err => {
      console.error('Error fetching class data:', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is fully loaded');
  fetchClasses();
});
