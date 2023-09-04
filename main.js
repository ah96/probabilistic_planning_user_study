document.addEventListener("DOMContentLoaded", function() {
    // Define an array of predetermined links
    const links = [
        "https://www.klix.ba/",
        "https://www.avaz.ba/",
        "https://www.oslobodjenje.ba/"
    ];

    const linkElement = document.getElementById("link");
    let currentIndex = 0;

    // Function to update the link and redirect
    function updateLinkAndRedirect() {
        linkElement.href = links[currentIndex];
        currentIndex = (currentIndex + 1) % links.length; // Cycle through the links
        setTimeout(() => {
            window.location.href = linkElement.href; // Redirect to the current link
        }, 5000); // Redirect every 5 seconds (adjust as needed)
    }

    // Initial setup
    updateLinkAndRedirect();
});
