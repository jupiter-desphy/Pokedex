import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


export function SinglePokemonPage(props) {
    let [item, setItem] = useState({});
    let [list, setList] = useState([]);

    let { id } = useParams();
    let [count, setCount] = useState(Number(id));

    // let { state } = useLocation();
    // let [count, setCount] = useState(Number(state.id || 1));


    /*function catchPokemon() {
        fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
            .then((res) => res.json())
            .then((pokemon) => {
                setItem(pokemon.pokemon.find((poke) => poke.id == count));
                setList(pokemon.pokemon);
            })
            .catch((err) => console.error(err));
    }*/

    async function fetchPokemon() {
        let res = await fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`);
        let data = await res.json();
        setList(data.pokemon)
    }

    function catchPokemon() {
        setItem(list.find((poke) => poke.id == count));
    }

    useEffect(() => {
        if (list.length == 0) fetchPokemon();
        else catchPokemon();
    }, [count, list]);

    function nextPokemon() {
        if (count >= 151) {
            setCount(1);
        } else {
            setCount(count + 1);
        }
    }

    function lastPokemon() {
        if (count == 1) {
            setCount(151);
        } else {
            setCount(count - 1);
        }
    }

    function randomPokemon() {
        setCount(Math.floor(Math.random() * 151) + 1);
    }



    return (
        <div id="PokedexPage">
            <div id="pokedexLogo">
                <Link to={`/allpokemon`}>
                    <img src="/images/pokedex-logo.png" alt="pokedex header logo" id='logoImg' />
                </Link>
            </div>
            <div style={{ backgroundImage: "url(/pokedexImg.png)" }} id="pokedex">
                <div id="mainScreen">
                    <img id="screenImg" src={`${item.img}`} alt={`${item.name}`} />
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
                        {/* slice to limit to 4 list items */}
                        {item.weaknesses?.slice(0, 4).map((weakness, idx) => {
                            return <li key={idx}>{weakness}</li>;
                        })}
                    </ul>
                </div>
                <div id="dirPadRight">
                    <button
                        id="dirPadRightButton"
                        className="invisible-button"
                        onClick={nextPokemon}
                    >
                    </button>
                </div>
                <div id="dirPadLeft">
                    <button
                        id="dirPadLeftButton"
                        className="invisible-button"
                        onClick={lastPokemon}
                    >
                    </button>
                </div>
                <div id="dirPadUp">
                    <button
                        id="dirPadUpButton"
                        className="invisible-button"
                        onClick={nextPokemon}
                    >
                    </button>
                </div>
                <div id="dirPadDown">
                    <button
                        id="dirPadDownButton"
                        className="invisible-button"
                        onClick={lastPokemon}
                    >
                    </button>
                </div>
                <div id="randomButtonDiv">
                    <button
                        id="randomButton"
                        className="invisible-button"
                        onClick={randomPokemon}
                    >
                    </button>
                </div>
            </div>
        </div>
    );
}
