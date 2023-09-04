document.addEventListener("DOMContentLoaded", function() {
    // Define an array of predetermined links
    const links = [
        "https://www.avaz.ba/",
        "https://www.klix.ba/",
        "https://www.oslobodjenje.ba/"
    ];

    const linkElement = document.getElementById("link");
    let userCount = 0;

    // Function to update the link and redirect
    function updateLinkAndRedirect() {
        const linkIndex = userCount % links.length;
        linkElement.href = links[linkIndex];
        userCount++;

        // Simulate a click on the link to redirect the user
        // linkElement.click();

        // Automatically redirect to the updated link
        window.location.href = linkElement.href;
    }

    // Initial setup
    updateLinkAndRedirect();
});

