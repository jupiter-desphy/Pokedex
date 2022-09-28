import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export function SinglePokemonPage(props) {
    let [item, setItem] = useState({});

    let { id } = useParams();

    function catchPokemon() {
        fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
            .then((res) => res.json())
            .then((pokemon) => setItem(pokemon.pokemon.find((poke) => poke.id == id)))
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        catchPokemon();
    }, []);

    // let weaknesses = getListOf(list, "weaknesses");

    return (
        <div style={{
            backgroundImage: "url(/pokedexImg.png)",
        }}
            id="background">
            <div>
                <img id="pokemonImg" src={`${item.img}`} alt={`${item.name}`} />
            </div>
            <div>
                <h1>{/*item.title */}</h1>
                <p>
                    Name: {item.name}
                </p>
                <p>
                    Num: {item.num}
                </p>
                <ul>Type:
                        {item.type?.map((pokType, idx) => {
                            return (
                                <li key={idx}>
                                    {pokType}
                                </li>
                            );
                        })}
                    </ul>
                
                    <ul>Weaknesses:
                        {item.weaknesses?.map((weakness, idx) => {
                            return (
                                <li key={idx}>
                                    {weakness}
                                </li>
                            );
                        })}
                    </ul>

            </div>
        </div>
    )
} 