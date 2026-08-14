import { scramble } from "../utils/textEffects.js";

export class NavigationSystem {

    constructor() {

        this.beacons = document.querySelectorAll(".nav-beacon");

    }

    create() {

        for (const beacon of this.beacons) {

            const label = beacon.querySelector(".label");

            beacon.addEventListener("mouseenter", () => {
                scramble(label);
            });

            beacon.addEventListener("mouseleave", () => {
                setTimeout(() => {
                    label.textContent = "";
                }, 120);
            });

        }

    }

    update() {

    }

}

export function setupPageTransitions() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.target === "_blank") return;

            e.preventDefault();
            const targetUrl = link.href;

            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300); 
        });
    });
}