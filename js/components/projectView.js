import { loadSVG } from "../utils/loadSVG.js";


export class ProjectView {

    constructor(project) {

        this.project = project;

    }


    async render() {

        const view = document.createElement("section");

        view.className = "project-view";

        view.style.setProperty(
            "--accent",
            this.project.accent
        );

        view.innerHTML = `

            <button class="project-back">
                ← Back
            </button>


            <div class="project-view-header">

                <p class="project-view-category">
                    ${this.project.category}
                </p>

                <div class="project-view-title-row">

                    <h1 class="project-view-title">
                        ${this.project.title}
                    </h1>

                    <div class="project-view-icon"></div>

                </div>

            </div>


            <div class="project-view-content">

                <p class="project-view-description">
                    ${this.project.description}
                </p>


                <div class="project-view-stack"></div>


                <a
                    class="project-view-github"
                    href="${this.project.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>

            </div>

        `;


        /* ---------- ICON ---------- */

        const icon =
            view.querySelector(".project-view-icon");

        icon.innerHTML = await loadSVG(
            this.project.icon
        );


        /* ---------- TECH STACK ---------- */

        const stack =
            view.querySelector(".project-view-stack");

        this.project.stack.forEach(tech => {

            const pill =
                document.createElement("span");

            pill.className = "tech-pill";

            pill.textContent = tech;

            stack.appendChild(pill);

        });


        /* ---------- BACK ---------- */

        view.querySelector(".project-back")
            .addEventListener("click", () => {

                view.remove();

            });


        return view;

    }

}