// Function to open the dialog box
function openDialog() {
    document.getElementById('myDialog').style.display = 'block';
}

// Function to close the dialog box
function closeDialog() {
    document.getElementById('myDialog').style.display = 'none';
}

// Function for scroll-to-top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to toggle dark/light theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}

// Typing effect function
const typingEffect = document.getElementById('typing-effect');
const text = "Welcome to my website! I'm Triyansh Patel, a Web Developer and Coder.";

let i = 0;
function typeWriter() {
    if (i < text.length) {
        typingEffect.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect on page load
window.onload = function () {
    typeWriter();
};

// Sidebar toggle functionality
const sidebar = document.querySelector('.sidebar');
const sidebarLinks = sidebar.querySelectorAll('a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.toggle('active');  // To hide the sidebar when clicking a link
    });
};

// Optional: Add the CSS class for light theme in case of toggling (added in CSS file)
