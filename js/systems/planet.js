import { scramble } from "../utils/textEffects.js";

export class PlanetSystem {

    constructor() {

        this.element = document.getElementById("planet");

        this.radiusX = 22.5;
        this.radiusY = 15.5;

        this.outlineWidth = 0.08;
        this.bandSpacing = 3;       
        this.bandWidth = 0.45;

        this.time = 0;

        this.colors = {
            outline: "#E2A93E",
            outlineHighlight: "#F1D495",

            band: "#7A5A20",
            bandHighlight: "#B98A34"
        };


    }

    getCharacter(brightness) {
        const chars = [
            ".",
            ",",
            ":",
            ";",
            "=",
            "+",
            "*",
            "#"
        ]
        const index = Math.round(
            brightness * (chars.length - 1)
        );

        return chars[index];
    }

    getSpherePoint(x, y) {

        const nx = x / this.radiusX;
        const ny = y / this.radiusY;

        const radiusSquared = nx * nx + ny * ny;

        if (radiusSquared > 1)
            return null;

        const z = Math.sqrt(1 - radiusSquared);

        return {
            x: nx,
            y: ny,
            z,
            radiusSquared
        };

    }

    getLatitude(point) {
    return Math.asin(point.y);
    }

    getLongitude(point) {
        return Math.atan2(point.x, point.z);
    }

    render() {

        let output = "";

        for (let y = -this.radiusY; y <= this.radiusY; y++) {

            for (let x = -this.radiusX; x <= this.radiusX; x++) {

                const point = this.getSpherePoint(x, y);
                const delay = Math.max(0, (this.radiusY - y) * 25);


                if (!point) {
                    output += " ";
                    continue;
                }

                const edge = 1 - Math.sqrt(point.radiusSquared);
                const latitude = this.getLatitude(point);
                const longitude = this.getLongitude(point);
                const rotatedLongitude = longitude + this.time * 0.25;
                const light = point.x * -0.6 + point.y * -0.3 + point.z;

                // output += "#";
                const band = Math.sin(
                    latitude * 9 +
                    rotatedLongitude * 0.8 +
                    Math.sin(rotatedLongitude * 3.0) * 0.7  
                );

                const threshold =
                    0.72 +
                    Math.sin(rotatedLongitude * 2.0) * 0.06 +
                    Math.sin(latitude * 6 + rotatedLongitude * 1.5) * 0.04;

                if (edge < this.outlineWidth) {

                    const cls = light > 0.3 ? "outline highlight" : "outline";
                    output += `<span class="${cls}" style="transition-delay:${delay}ms">+</span>`;
                }
                else if (band > threshold && edge > 0.08) {

                    const bandChar = band > threshold + 0.12 ? "*" : "-";
                    const cls = light > 0.4 ? "band highlight" : "band";
                    output += `<span class="${cls}" style="transition-delay:${delay}ms">${bandChar}</span>`;
                }
                else {
                    output += " ";
                }

            }

            output += "\n";

        }

        this.element.innerHTML = output;

    }

    getCenter() {
        return {
            x: 50,
            y: 50
        };
    }

    getOrbitRadius() {

    return {
        x: this.radiusX + 6,
        y: this.radiusY + 4
    };

}


    create(){
        this.render();
        requestAnimationFrame(() => {
            this.element.classList.add("revealed");
        });

        const hint = document.getElementById("hint-text");

        setTimeout(() => {
            scramble(hint, undefined, 35, 30);
        }, 1500);

    }

    update(frameTime) {
        //console.log(time);
        this.time = frameTime;
        this.render();
    }

}