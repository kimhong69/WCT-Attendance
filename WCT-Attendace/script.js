// script.js

// document.addEventListener('DOMContentLoaded', () => {
//   const loadingOverlay = document.getElementById('loading-overlay');
//
//   document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', function (e) {
//       if (this.id === 'screenshot-button') {
//         return; // Do nothing, let the screenshot function handle it
//       }
//       if (this.id === 'create-button') {
//         return;
//       }
//
//       if (this.id === 'cancel-btn') {
//         return;
//       }
//       if (this.id === 'back-button') {
//         return;
//       }
//
//       e.preventDefault(); // Prevent the default anchor behavior
//       const targetPage = this.getAttribute('href');
//
//       // Show loading overlay
//       loadingOverlay.classList.add('show');
//
//       // Hide the overlay after 0.3 seconds and navigate to the new page
//       setTimeout(() => {
//         window.location.href = targetPage;
//       }, 300); // Duration to match the fade out time
//     });
//   });
// });

function openSidebar() {
  var sidebar = document.getElementById("mySidebar");
  sidebar.style.width = "500px";  // Slide in the sidebar
  document.getElementById("overlay").classList.add("active");  // Show the overlay
  sidebar.classList.add("open");  // Add 'open' class to trigger the flip
}

function closeSidebar() {
  var sidebar = document.getElementById("mySidebar");
  sidebar.style.width = "0";  // Slide out the sidebar
  document.getElementById("overlay").classList.remove("active");  // Hide the overlay
  sidebar.classList.remove("open");  // Remove 'open' class to reset the flip
}

// Close sidebar when clicking anywhere outside of it (the overlay)
window.onclick = function(event) {
  const sidebar = document.getElementById("mySidebar");
  const overlay = document.getElementById("overlay");
  if (event.target === overlay) {
    closeSidebar();  // Close the sidebar if the click is on the overlay
  }
};

function goBack() {
  window.history.back();  // Navigates back to the previous page
}
function showPopup() {
  const popup = document.getElementById('logout-popup');
  popup.style.display = 'flex'; // Make it visible
  setTimeout(() => {
    popup.classList.add('show'); // Add the show class to start fade-in
  }, 10); // Slight delay to allow display to take effect
}

function hideCreatePopup() {
  const popup = document.getElementById('create-popup');
  popup.classList.remove('show'); // Remove the show class to start the fade-out

  // Wait for the transition to complete before hiding the popup
  setTimeout(() => {
    popup.style.display = 'none'; // Hide the popup after the fade-out
  }, 300); // Match this duration with the CSS transition duration (0.3s)
}

function createPopup() {
  const popup = document.getElementById('create-popup');
  popup.style.display = 'flex'; // Make it visible
  setTimeout(() => {
    popup.classList.add('show'); // Add the show class to start fade-in
  }, 10); // Slight delay to allow display to take effect
}
function confirmDelete() {
  const confirmation = confirm("Are you sure you want to delete this class?");
  if (confirmation) {
    alert("Class deleted successfully.");
  } else {
    alert("Deletion canceled.");
  }
}
function confirmResetPasswords() {
  const confirmation = confirm("Are you sure you want to reset Password?");
  if (confirmation) {
    alert("Password has been successfully.");
  } else {
    alert("Nothing changed");
  }
}

function hideCreateStudentPopup() {
  const popup = document.getElementById('create-student-popup');
  popup.classList.remove('show'); // Remove the show class to start the fade-out

  // Wait for the transition to complete before hiding the popup
  setTimeout(() => {
    popup.style.display = 'none'; // Hide the popup after the fade-out
  }, 300); // Match this duration with the CSS transition duration (0.3s)
}

function hidePopup() {
  const popup = document.getElementById('logout-popup');
  popup.classList.remove('show'); // Remove the show class to start the fade-out

  // Wait for the transition to complete before hiding the popup
  setTimeout(() => {
    popup.style.display = 'none'; // Hide the popup after the fade-out
  }, 300); // Match this duration with the CSS transition duration (0.3s)
}


document.getElementById('screenshot-button').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor behavior

  // Specify the element to screenshot; use document.body for full page
  html2canvas(document.body, {scale: 2}).then(function (canvas) {
    // Create an image from the canvas
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg', 1.0); // High-quality JPEG
    link.download = 'AttendanceScreenshot.png'; // Set the filename
    document.body.appendChild(link); // Append link to body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link after downloading
  });
});


function switchTab(event, sectionId) {
  event.preventDefault();

  // Get all content sections
  var sections = document.querySelectorAll('.content-section');

  // Fade out all sections
  sections.forEach(function (section) {
    if (section.classList.contains('active-content')) {
      section.style.opacity = '0'; // Start fading out
      section.style.transform = 'translateY(20px)'; // Slide down
    }
  });

  // Wait for the fade-out transition to finish
  setTimeout(() => {
    // Remove active class and hide sections
    sections.forEach(function (section) {
      section.classList.remove('active-content'); // Remove active class
      section.style.display = 'none'; // Hide section
    });

    // Show the selected content section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'flex'; // Show section
    setTimeout(() => {
      selectedSection.classList.add('active-content'); // Add active class to trigger fade-in
      selectedSection.style.opacity = '1'; // Fade in
      selectedSection.style.transform = 'translateY(0)'; // Slide in to original position
    }, 100); // A small delay to allow display change to take effect
  }, 300); // Match with the CSS transition duration

  // Remove 'active' class from all side-menu links
  var links = document.querySelectorAll('.side-menu');
  links.forEach(function (link) {
    link.classList.remove('active');
  });

  // Add 'active' class to the clicked link
  event.target.classList.add('active');
}

function toggleCheckbox(element) {
  if (element.classList.contains('ri-checkbox-blank-line')) {
    element.classList.remove('ri-checkbox-blank-line');
    element.classList.add('ri-checkbox-fill');
    element.style.color = 'blue';
  } else {
    element.classList.remove('ri-checkbox-fill');
    element.classList.add('ri-checkbox-blank-line');
    element.style.color = 'unset';
  }
}

