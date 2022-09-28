import { useEffect, useState } from "react";
import { filterPokemonByName, getListOf } from "../helpers/poke.helpers";
import { Link } from "react-router-dom";

export function AllPokemonPage(props) {
    let [list, setList] = useState ([]);
    let [searchPokemon, setSearchPokemon] =useState("");

    function catchEmAll() {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then((res) => res.json())
            .then((pokemon) => setList(pokemon.pokemon))
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        catchEmAll();
    }, []);
console.log("this is the list", list);
    let pokemonByName = filterPokemonByName (list, searchPokemon)
    let names = getListOf(list, "name");
    // let { avg_score, total, latest } = getFilmStats(pokemonByName);

    return (
        <div>
            <h1>POKEDEX</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="searchPokemon">
                        Select Pokemon:{" "}
                    </label>
                    <select
                        name="searchPokemon"
                        id="searchPokemon"
                        value={searchPokemon}
                        onChange={(event) => setSearchPokemon(event.target.value)}
                    >
                        <option value="">All</option>
                        {names.map((name, idx) => {
                            return (
                                <option key={name + idx} value={name}>
                                    {name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </form>
            <div>
                <div>
                    <span># Of Films</span>
                    {/* <span>{total}</span> */}
                </div>
                <div>
                    <span>Average Rating</span>
                    {/* <span>{avg_score.toFixed(2)}</span> */}
                </div>
                <div>
                    <span>Latest Film</span>
                    {/* <span>{latest}</span> */}
                </div>
            </div>
            <ul>
                {pokemonByName.map((pokemon) => {
                    return (
                        <li key={pokemon.id}>
                            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}