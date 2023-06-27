    document.addEventListener('DOMContentLoaded', function() {
        // Get the current page URL
        var currentURL = window.location.pathname;

        // Define the array of URLs
        var manualLinks = ['/index.html', '/about.html', '/contact.html'];

        // Get all the nav links
        var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        // Loop through each nav link and check if its href matches the current URL or any of the manual links
        navLinks.forEach(function(link) {
            var linkURL = link.getAttribute('href');

            // If the href matches the current URL or any of the manual links, add the 'active' class
            if (linkURL === currentURL || manualLinks.includes(linkURL)) {
                link.classList.add('active');
            }
        });
    });
