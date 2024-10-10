document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function editProfile() {
    alert("Profile editing functionality will be added here.");
    // You can add the profile editing form or logic here
}

function logout() {
    alert("You have been logged out.");
    // Add logic to log out the user here (e.g., redirecting to a login page)
}
