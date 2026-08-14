import { STAR_CONFIG } from "../config.js";

class Star {

    constructor(element, x, y, size, brightness, twinkle, phase, speed) {

        this.element = element;

        this.x = x;
        this.y = y;

        this.size = size;
        this.brightness = brightness;

        this.twinkle = twinkle;

        this.phase = phase;
        this.speed = speed;

        this.birth = performance.now();
    }

    update(time) {

    if (!this.twinkle) return;
    if (performance.now() - this.birth < 1200) return;

    const brightness =
        this.brightness +
        Math.sin(time * this.speed + this.phase) * STAR_CONFIG.TWINKLE.AMPLITUDE;

    this.element.style.opacity =
        Math.max(0.2, Math.min(1, brightness));

    const scale =
        1 + Math.sin(time * this.speed + this.phase) * STAR_CONFIG.TWINKLE.SCALE;

    this.element.style.transform =
        `scale(${scale})`;

}
}

const starCharacters = [
    ".",
    ".",
    ".",
    ".",
    "*",
    "+",
    ":",
    "'"
];

const starsContainer = document.getElementById("stars");
const starObjects = [];

export function createStars() {

    const starsContainer = document.getElementById("stars");

    for (let i = 0; i < STAR_CONFIG.COUNT; i++) {

        const star = document.createElement("span");
        star.classList.add("star");
        star.textContent =
            starCharacters[Math.floor(Math.random() * starCharacters.length)];

        // Position
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        // Size & brightness
        const r = Math.random();

        let size;
        let brightness;

        if (r < STAR_CONFIG.DISTRIBUTION.TINY) {
            size = STAR_CONFIG.SIZE.TINY;
            brightness = 0.35 + Math.random() * 0.15;
        }
        else if (r < STAR_CONFIG.DISTRIBUTION.TINY + STAR_CONFIG.DISTRIBUTION.MEDIUM) {
            size = STAR_CONFIG.SIZE.MEDIUM;
            brightness = 0.65 + Math.random() * 0.15;
        }
        else {
            size = STAR_CONFIG.SIZE.LARGE;
            brightness = 0.9;
        }

        star.style.fontSize = size + "rem";
        star.style.setProperty("--target-opacity", brightness);

        const delay = (parseFloat(star.style.top) / 100) * 700 + Math.random() * 100;
        star.style.animationDelay = `${delay}ms`;

        // Twinkle
        const twinkle = r >= 0.90;

        starsContainer.appendChild(star);

        starObjects.push( 
        new Star(star, parseFloat(star.style.left), parseFloat(star.style.top), size, brightness, twinkle,
        Math.random() * Math.PI * 2, STAR_CONFIG.TWINKLE.MIN_SPEED + Math.random() * 
        (STAR_CONFIG.TWINKLE.MAX_SPEED - STAR_CONFIG.TWINKLE.MIN_SPEED)));
    }
}

export const StarSystem = {

    update(time) {

        for (const star of starObjects) {
            star.update(time);
        }

    }

};

