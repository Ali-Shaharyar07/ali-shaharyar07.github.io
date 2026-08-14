import { loadSVG } from "../utils/loadSVG.js";

export class ProjectCard {

    constructor(project) {

        this.project = project;

    }

    async render() {

        const card = document.createElement("article");

        card.className = "project-card";

        card.style.setProperty(
            "--accent",
            this.project.accent
        );

        card.innerHTML = `

            <div class="project-main">

                <div class="project-icon"></div>

                <h2 class="project-title">
                    ${this.project.title}
                </h2>

                <p class="project-date">
                    ${this.project.date}
                </p>
            </div>

            <p class="project-description">
                ${this.project.description}
            </p>

            <div class="project-stack"></div>

            <a
                class="project-github"
                href="${this.project.github}"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub ↗
            </a>

        `;


        const icon =
            card.querySelector(".project-icon");

        icon.innerHTML = await loadSVG(
            this.project.icon
        );


        const stack =
            card.querySelector(".project-stack");

        this.project.stack.forEach(tech => {

            const pill =
                document.createElement("span");

            pill.className = "tech-pill";

            pill.textContent = tech;

            stack.appendChild(pill);

        });


        return card;

    }

}