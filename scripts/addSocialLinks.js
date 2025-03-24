// javascript to add image hyperlink functionality
    // define possible hyperlink id's:
    let social = [, , , , ];

    // links
    let links = {"youtube":"https://youtube.com/c/crishbiskit09",
        "tiktok":"https://tiktok.com/@crishbiskit09",
        "instagram":"https://instagram.com/crishbiskit09",
        "discord":"https://discord.gg/GK4CF4eyZS",
        "mail":"mailto:crishbiskit09@gmail.com"};

    // take action
    document.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") { //Ensure it's a image
            if (Object.keys(links).includes(event.target.id)){ // Figure out which img
                window.open(links[event.target.id], "_blank");
            }
        }
    });

