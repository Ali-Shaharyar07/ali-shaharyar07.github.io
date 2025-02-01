document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".projects h1");
    const targetText = "PROJECTS"; 
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-={}[]|:;<>,.?/";
    
    function randomizeText(callback) {
        let iteration = 0;

        function animate() {
            let displayedText = targetText
                .split("")
                .map((char, index) => {
                    if (index < iteration) {
                        return char; 
                    }
                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join("");

            textElement.textContent = displayedText;

            if (iteration < targetText.length) {
                iteration++;
                setTimeout(animate, 100); 
            } else if (callback) {
                setTimeout(callback, 200);
            }
        }

        animate();
    }

 
    randomizeText();

 
    textElement.addEventListener("mouseenter", function () {
        randomizeText();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".about h1");
    const targetText = "ABOUT ME"; 
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-={}[]|:;<>,.?/";
    
    function randomizeText(callback) {
        let iteration = 0;

        function animate() {
            let displayedText = targetText
                .split("")
                .map((char, index) => {
                    if (index < iteration) {
                        return char; 
                    }
                    return characters[Math.floor(Math.random() * characters.length)]; 
                })
                .join("");

            textElement.textContent = displayedText;

            if (iteration < targetText.length) {
                iteration++;
                setTimeout(animate, 100); 
            } else if (callback) {
                setTimeout(callback, 200); 
            }
        }

        animate();
    }

   
    randomizeText();

 
    textElement.addEventListener("mouseenter", function () {
        randomizeText();
    });
});
