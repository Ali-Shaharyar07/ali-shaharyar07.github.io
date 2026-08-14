import { createStars, StarSystem } from "./systems/stars.js";
import { PlanetSystem } from "./systems/planet.js";
import { addSystem, startEngine } from "./engine.js";
import { NavigationSystem } from "./systems/navigation.js";


createStars();
addSystem(StarSystem);

const planet = new PlanetSystem();
planet.create();
addSystem(planet);

const navigation = new NavigationSystem();
navigation.create();



startEngine();      