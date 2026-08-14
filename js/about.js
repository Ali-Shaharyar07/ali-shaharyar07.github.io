import { setupPageTransitions } from "./systems/navigation.js";

document.addEventListener("DOMContentLoaded", () => {
    // Initialize fade transitions
    setupPageTransitions();

    const container = document.getElementById("portrait-container");
    const revealImg = document.getElementById("lego-reveal");

    if (container && revealImg) {
        container.addEventListener("mousemove", (e) => {
            // Get dimensions of the container
            const rect = container.getBoundingClientRect();
            
            // Calculate mouse position relative to the container
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update CSS variables
            revealImg.style.setProperty("--x", `${x}px`);
            revealImg.style.setProperty("--y", `${y}px`);
        });
    }
});