const systems = [];

export function addSystem(system) {
    systems.push(system);
}

function update(time) {

    const seconds = time * 0.001;

    for (const system of systems) {
        system.update(seconds);
    }

    requestAnimationFrame(update);
}

export function startEngine() {
    requestAnimationFrame(update);
}