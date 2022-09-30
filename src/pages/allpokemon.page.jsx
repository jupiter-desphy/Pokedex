import { useEffect, useState } from "react";
import { filterPokemonByWeaknesses, filterPokemonByType, getListOf } from "../helpers/poke.helpers";
import { Link } from "react-router-dom";

export function AllPokemonPage(props) {
    let [list, setList] = useState([]);
    let [searchType, setSearchType] = useState("");
    let [searchWeaknesses, setSearchWeaknesses] = useState("");

    function catchEmAll() {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then((res) => res.json())
            .then((pokemon) => setList(pokemon.pokemon))
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        catchEmAll();
    }, []);

    let pokemonByType = filterPokemonByType(list, searchType)
    let pokemonByWeaknesses = filterPokemonByWeaknesses(pokemonByType, searchWeaknesses)
    let types = getListOf(list, "type");
    let weaknessesArr = getListOf(list, "weaknesses");

    // let { avg_score, total, latest } = getFilmStats(pokemonByType);

    return (
        <div id="allPokemon">
            <div id="pokedexLogo">
                <Link to={`/pokemon/1`}>
                    <img src="/images/pokedex-logo.png" alt="pokedex header logo" id='logoImg' />
                </Link>
            </div>


            <ul id="photoList">
                {pokemonByWeaknesses.map((pokemon) => {
                    return (
                        <li key={pokemon.id}>
                            <Link to={`/pokemon/${pokemon.id}`}><img src={`${pokemon.img}`} alt={`${pokemon.name}`} /></Link>
                        </li>
                    );
                })}
            </ul>



            <br></br>

            <br></br>
            <form>
                <div className="form-group">
                    <div>
                        <label htmlFor="searchType">
                            Select Type:{" "}
                        </label>
                        <select
                            name="searchType"
                            id="searchType"
                            value={searchType}
                            onChange={(event) => setSearchType(event.target.value)}
                        >
                            <option value=""> All</option>
                            {types.map((type, idx) => {
                                return (
                                    <option key={type + idx} value={type}>
                                        {type}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <br>
                    </br>

                    <div>
                        <label htmlFor="searchWeaknesses">
                            Select Weaknesses:{" "}
                        </label>
                        <select
                            name="searchWeaknesses"
                            id="searchWeaknesses"
                            value={searchWeaknesses}
                            onChange={(event) => setSearchWeaknesses(event.target.value)}
                        >
                            <option value=""> All</option>
                            {weaknessesArr.map((weaknesses, idx) => {
                                return (
                                    <option key={weaknesses + idx} value={weaknesses}>
                                        {weaknesses}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <br></br>
                </div>
            </form>
        </div>
    );
}