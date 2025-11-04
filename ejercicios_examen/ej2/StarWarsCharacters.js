class StarWarsCharacters{
constructor(characters){
    this.characters = characters;
    this.collectedCharacters = [];
    this.collectedCharacters2 = [];

}

getWomansName(){
let mujeres = this.characters.filter(pj => pj.gender === "female").map(pj => pj.name);
mujeres.sort();
return mujeres;
}

getSmallerPeople(){
    let bajitos = this.characters.map(pj => parseFloat(pj.height) - 10);
    return bajitos;
}

mediaDeAltura(){
let total= 0;
let media= 0;

for(let i = 0 ; i < this.characters.length ; i++){
    total += parseFloat(this.characters.height[i]);
}

media = total/this.characters.lenght

return media;
}

collectByName(characterName){

    this.collectedCharacters.push(this.characters.find(pj => pj.name === characterName));

}

}