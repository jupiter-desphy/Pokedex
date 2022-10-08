import { BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
import { HomePage, AllPokemonPage, SinglePokemonPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/allpokemon"}>AllPokemonPage</NavLink>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allpokemon" element={<AllPokemonPage />} />
        <Route exact path="pokemon/:id" element={<SinglePokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;