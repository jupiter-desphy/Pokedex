import { useState } from "react";
import { Link } from "react-router-dom";

export function HomePage(props) {
    return (
        <div 
        // style={{ backgroundImage: "")" }}
         id="homePage">
        
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
            </div>  
            <header>
                <h1>Hello World!</h1>
                <div>
                    <br></br>
                    <p>
                        Welcome to my Pokedex app!
                        <br></br>
                        <br></br>
                        Pokedexes are an important part of the Pokemon Universe!
                        In the anime, Ash would encounter a new Pokemon every episode and scanned it using a Pokedex to get the scoop.
                        It was an iconic card when Pokemon first launched its trading card game.
                        On Game Boy, it took the form as the handheld it was played on!  

                        <br></br>
                        <br></br>
                        <Link to={`/allpokemon`}>Enter Here</Link>
                    </p>
                </div>


            </header>
        </div>
    );
}
