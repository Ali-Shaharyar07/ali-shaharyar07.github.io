import { projects } from "./data/projects.js";
import { ProjectCard } from "./components/projectCard.js";
import { setupPageTransitions } from "./systems/navigation.js";
const grid = document.getElementById("projects-grid");
const filters = document.querySelectorAll("#project-filters button");

setupPageTransitions()

async function renderProjects(category = "all") {

    grid.innerHTML = "";

    const filteredProjects =
        category === "all"
            ? projects
            : projects.filter(
                project => project.category === category
            );

    for (const project of filteredProjects) {

        const card = new ProjectCard(project);

        grid.appendChild(
            await card.render()
        );

    }

}


filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(
            filter => filter.classList.remove("active")
        );

        button.classList.add("active");

        renderProjects(
            button.dataset.category
        );

    });

});


renderProjects();