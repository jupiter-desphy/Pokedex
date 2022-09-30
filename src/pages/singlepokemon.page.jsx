import { useState, useEffect } from "react";
import { useParams , Link} from "react-router-dom";


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
        <div>
            <div id="pokedexLogo">
            <img src="/images/pokedex-logo.png" alt="pokedex header logo" id='logoImg'/>
            </div>
            <div style={{ backgroundImage: "url(/pokedexImg.png)" }} id="pokedex">
                <div id="mainScreen">
                    <img id="pokemonImg" src={`${item.img}`} alt={`${item.name}`} />
                </div>
                <div id="nameScreen">
                    {item.name} <br></br>
                    <br></br>
                    ID # {item.num}
                </div>
                <div id="heightScreen">
                    ht: {item.height}
                </div>
                <div id="weightScreen">
                    wt: {item.weight}
                </div>
                <div id="typeScreen">
                    <ul>
                        <br></br>
                        <u>TYPE</u>
                        <br></br>
                        <br></br>
                        {item.type?.map((pokType, idx) => {
                            return <li key={idx}>{pokType}</li>;
                        })}
                    </ul>
                </div>

                <div id="weaknessScreen">
                    <ul>
                        <br></br>
                        <u>WEAKNESSES</u>
                        <br></br>
                        <br></br>
                        {item.weaknesses?.map((weakness, idx) => {
                            return <li key={idx}>{weakness}</li>;
                        })}
                    </ul>
                </div>
                <div id="dirPadRight" className="dirPad">
                    
                    <Link to={`/pokemon/${item.id+1}`}><button>{`/pokemon/${item.id+1}`}</button></Link>
                </div>
            </div>
        </div>
    );
}
