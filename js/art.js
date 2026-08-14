import { setupPageTransitions } from "./systems/navigation.js";
import { artData } from "./data/art.js";
import { ArtCard } from "./components/artCard.js";

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initialize page transitions
    setupPageTransitions();

    const grid = document.getElementById("art-grid");

    // 2. Render Art Grid
    artData.forEach(art => {
        const card = new ArtCard(art);
        grid.appendChild(card.render());
    });

    // 3. Lightbox Logic
    const artItems = document.querySelectorAll(".art-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("lightbox-close");

    // Open lightbox
    artItems.forEach(item => {
        item.addEventListener("click", () => {
            lightboxImg.src = item.src;
            lightbox.classList.add("active");
        });
    });

    // Close lightbox function
    const closeLightbox = () => {
        lightbox.classList.remove("active");
        setTimeout(() => { lightboxImg.src = ""; }, 300);
    };

    closeBtn.addEventListener("click", closeLightbox);

    // Close on background click
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });

});