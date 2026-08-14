const cache = new Map();

export async function loadSVG(path) {

    if (cache.has(path)) {
        return cache.get(path);
    }

    const svg = await fetch(path)
        .then(response => response.text());

    cache.set(path, svg);

    return svg;

}