document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.querySelector('.home-section');
    const contactSection = document.querySelector('.contact-section');
    const homeIcon = document.querySelector('.icon.home');
    const contactIcon = document.querySelector('.icon.contact');

    // Show Home section by default
    homeSection.classList.add('active');

    // Home icon click event
    homeIcon.addEventListener('click', function() {
        contactSection.classList.remove('active'); // Hide contact
        setTimeout(() => {
            homeSection.classList.add('active'); // Show home
        }, 500); // Add delay to sync with CSS transition
    });

    // Contact icon click event
    contactIcon.addEventListener('click', function() {
        homeSection.classList.remove('active'); // Hide home
        setTimeout(() => {
            contactSection.classList.add('active'); // Show contact
        }, 500); // Add delay to sync with CSS transition
    });
});
