import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


export function SinglePokemonPage(props) {
    let [item, setItem] = useState({});
    let [list, setList] = useState([]);
    let { id } = useParams();
    let [count, setCount] = useState(Number(id))

    function catchPokemon() {
        fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
            .then((res) => res.json())
            .then((pokemon) => {
                setItem(pokemon.pokemon.find((poke) => poke.id == count));
                setList(pokemon.pokemon)

            })
            
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        catchPokemon();
    }, []);

    function nextPokemon() {
        if (count > 151) {
            setCount(1);
        } else {
            setCount(count + 1);
            catchPokemon();
        }
    }

    function lastPokemon() {
        if (count < 1) {
            setCount(151);
        } else {
            setCount(count - 1);
            catchPokemon();
        }
    }

    function randomPokemon() {
        setCount(Math.floor(Math.random() * 151) + 1);
        catchPokemon()
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
                        {item.weaknesses?.slice(0, 4).map((weakness, idx) => {
                            return <li key={idx}>{weakness}</li>;
                        })}
                    </ul>
                </div>
                <div id="dirPadRight" className="dirPad">
                    <button id="dirPadRightButton" onClick={nextPokemon}>
                    </button>
                </div>
                <div id="dirPadLeft" className="dirPad">
                    <button id="dirPadLeftButton" onClick={lastPokemon}></button>
                </div>
                <div id="dirPadUp" className="dirPad">
                    <button id="dirPadUpButton" onClick={nextPokemon}></button>
                </div>
                <div id="dirPadDown" className="dirPad">
                    <button id="dirPadDownButton" onClick={lastPokemon}></button>
                </div>
                <div id="homeButtonDiv">
                    {/* <Link to={`/Allpokemon`}> */}
                        <button id="homeButton" onClick={randomPokemon}></button>
                    {/* </Link>  */}
                </div>
            </div>
            {/* <div>
                <ul>
                    {item?.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link to={`/pokemon/${item.id}`}>
                                {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div> */}
        </div>
    );
}
