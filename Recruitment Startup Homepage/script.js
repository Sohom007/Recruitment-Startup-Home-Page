const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggle-button');

function toggleSidebar() {
  if (sidebar.style.left === '0px' || sidebar.style.left === '') {
    sidebar.style.left = '-250px';
  } else {
    sidebar.style.left = '0';
  }
}

// Add an event listener to the toggle button to trigger the sidebar toggle
toggleButton.addEventListener('click', toggleSidebar);
