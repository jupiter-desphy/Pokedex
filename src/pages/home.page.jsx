import { useState } from "react";
import { Link } from "react-router-dom";

export function HomePage(props) {
    return (
        <div 
        // style={{ backgroundImage: "")" }}
         id="homePage" >
        
            <div id="pokedexLogo">
                <Link to={`/allpokemon`}>
                    <img src="/images//Logo.webp" alt="pokedex header logo" id='logoImg' />
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
                        Pokedexes play an iconic role in the Pokemon Universe!
                        In the anime, Ash would encounter a new Pokemon every episode and scanned it using a Pokedex to get the scoop.
                        It was its own card when Pokemon first launched its trading card game.
                        On Game Boy, it took the form as the handheld it was played on!  

                        <br></br>
                        <br></br>
                        <br></br>
                        Push <Link to={`/allpokemon`}><button id="startButton">START</button></Link> to begin!
                    </p>
                </div>


            </header>
        </div>
    );
}
