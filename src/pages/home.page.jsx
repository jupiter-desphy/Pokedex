import { useState } from "react";
import { Link } from "react-router-dom";

export function HomePage(props) {
    let [list, setList] = useState(["ready", "set", "GO!"]);
    let [text, setText] = useState([""]);


    return (
        <div id="homePage">
        
            <div id="pokedexLogo">
                <Link to={`/allpokemon`}>
                    <img src="/images/pokedex-logo.png" alt="pokedex header logo" id='logoImg' />
                </Link>
            </div>
            <div id="byJupiter">              
                by jupiter
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>  
            <header>
                <h1>Hello World</h1>
                <div>
                    <br></br>
                    <p>
                        Welcome to my Pokedex app!
                        <br></br>
                        <br></br>
                        {/* If you're a fan of Pokemon, */}

                        <br></br>
                        <br></br>
                        <Link to={`/allpokemon`}>Enter Here</Link>
                    </p>
                </div>


            </header>
        </div>
    );
}
