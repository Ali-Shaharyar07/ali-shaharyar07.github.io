document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".projects h1");
    const targetText = "PROJECTS"; // Change this if needed
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-={}[]|:;<>,.?/";
    
    function randomizeText(callback) {
        let iteration = 0;

        function animate() {
            let displayedText = targetText
                .split("")
                .map((char, index) => {
                    if (index < iteration) {
                        return char; // Reveal correct character
                    }
                    return characters[Math.floor(Math.random() * characters.length)]; // Random character
                })
                .join("");

            textElement.textContent = displayedText;

            if (iteration < targetText.length) {
                iteration++;
                setTimeout(animate, 100); // Speed of reveal
            } else if (callback) {
                setTimeout(callback, 200); // Ensures smooth transition after animation
            }
        }

        animate();
    }

    // Play animation once on page load
    randomizeText();

    // Play animation again when hovering
    textElement.addEventListener("mouseenter", function () {
        randomizeText();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".about h1");
    const targetText = "ABOUT ME"; // Change this if needed
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-={}[]|:;<>,.?/";
    
    function randomizeText(callback) {
        let iteration = 0;

        function animate() {
            let displayedText = targetText
                .split("")
                .map((char, index) => {
                    if (index < iteration) {
                        return char; // Reveal correct character
                    }
                    return characters[Math.floor(Math.random() * characters.length)]; // Random character
                })
                .join("");

            textElement.textContent = displayedText;

            if (iteration < targetText.length) {
                iteration++;
                setTimeout(animate, 100); // Speed of reveal
            } else if (callback) {
                setTimeout(callback, 200); // Ensures smooth transition after animation
            }
        }

        animate();
    }

    // Play animation once on page load
    randomizeText();

    // Play animation again when hovering
    textElement.addEventListener("mouseenter", function () {
        randomizeText();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const terminalText = document.getElementById("terminal-text");
    const cursor = document.querySelector(".cursor");

    const lines = [
        "User: Saif",
        "Age: 18",
        "Explorer: Lived in multiple cities, shaped by diverse cultures.",
        "Passionate Gamer: Games fuel my creativity and persistence.",
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                terminalText.textContent += lines[lineIndex][charIndex];
                charIndex++;
                setTimeout(typeLine, 50);
            } else {
                terminalText.textContent += "\n";
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 500);
            }
        } else {
            cursor.style.display = "none"; // Hide cursor after typing finishes
        }
    }

    setTimeout(typeLine, 1000);
});
