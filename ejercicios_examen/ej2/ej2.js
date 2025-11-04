const characters = require("./characters.js");
const StarWarsCharacters = require("./StarWarsCharacters.js");

const sw = new StarWarsCharacters(characters);
console.log(sw.getWomansName());