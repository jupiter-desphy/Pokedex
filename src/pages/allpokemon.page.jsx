import { useEffect, useState } from "react";
import { filterPokemonByName, getListOf } from "../helpers/poke.helpers";
import { Link } from "react-router-dom";

export function AllPokemonPage(props) {
    let [list, setList] = useState([]);
    let [searchPokemon, setSearchPokemon] = useState("");

    function catchEmAll() {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then((res) => res.json())
            .then((pokemon) => setList(pokemon.pokemon))
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        catchEmAll();
    }, []);

    let pokemonByName = filterPokemonByName(list, searchPokemon)
    let names = getListOf(list, "name");
    // let { avg_score, total, latest } = getFilmStats(pokemonByName);

    return (
        <div id="allPokemon">
            <div id="pokedexLogo">
                <Link to={`/pokemon/1`}>
                    <img src="/images/pokedex-logo.png" alt="pokedex header logo" id='logoImg' />
                </Link>
            </div>
            <ul id="photoList">
                {pokemonByName.map((pokemon) => {
                    return (
                        <li key={pokemon.id}>
                            <Link to={`/pokemon/${pokemon.id}`}><img src={`${pokemon.img}`} alt={`${pokemon.name}`} /></Link>
                        </li>
                    );
                })}
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
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
        </div>
    );
}