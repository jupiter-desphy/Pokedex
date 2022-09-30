export function filterPokemonByName(list, name) {
    if (name) return list.filter((pokemon) => pokemon.name === name);
    else return list;
}

export function filterPokemonByType(list, type) {
    if (type) return list.filter((pokemon) => pokemon.type.includes(type));
    else return list;
}

export function filterPokemonByWeaknesses(list, weaknesses) {
    if (weaknesses) return list.filter((pokemon) => pokemon.weaknesses.includes(weaknesses));
    else return list;
}

export function getListOf(list, prop) {

    return [...new Set(list.reduce((allItems, pokemon)=> allItems.concat (pokemon[prop]),[])
    )];

}
