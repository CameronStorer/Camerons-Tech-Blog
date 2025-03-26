// This script adds the toolbar button functionality

// javascript to add button functionality
    // define possible button id's:
    let buttonNames = ["about", "blog", "contact", "donate"];
    // take action
    document.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") { //Ensure it's a button
            if (buttonNames.includes(event.target.id)){ // Figure out which button
                window.parent.location.href = "https://blog.cameronstorer.com/blog" + event.target.id;
            }
        }
    });