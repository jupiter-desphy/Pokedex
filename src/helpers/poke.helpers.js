export function filterPokemonByName(list, name) {
    if (name) return list.filter((pokemon) => pokemon.name === name);
    else return list;
}



export function getListOf(list, prop) {


    return [...new Set(list.map((pokemon)=> pokemon[prop] || ""))];

}