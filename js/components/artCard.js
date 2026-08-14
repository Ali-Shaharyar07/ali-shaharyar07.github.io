export class ArtCard {
    
    constructor(art) {
        this.art = art;
    }

    render() {
        const wrapper = document.createElement("div");
        wrapper.className = "art-item";

        // Apply the custom accent color as a CSS variable
        wrapper.style.setProperty("--accent", this.art.accent);

        wrapper.innerHTML = `
            <img src="${this.art.src}" alt="${this.art.alt}" loading="lazy">
            <div class="art-overlay">
                <h3 class="art-title">${this.art.title}</h3>
            </div>
        `;

        return wrapper;
    }
}