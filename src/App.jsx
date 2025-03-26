import './App.scss';
import pokeball from './assets/images/pokeball.png'; // pokemon ball logo/icon
import Pokemon from './components/Pokemon';

function App() {
  return (
    <>
    <header>
      <h1>Pok&#233;mon</h1>
      <img src={pokeball} alt="pokeball" />
      <span>API</span>
    </header>
    <section>
      <Pokemon />
    </section>
    </>
  )
}

export default App;

/* Ref: 
  1) https://stackoverflow.com/questions/3812949/how-can-i-show-special-characters-like-e-with-accent-acute-over-it-in-html-pag
  2) https://pokeapi.co/docs/v2.html
  3) https://www.dafont.com/pokemon.font
  4) https://meyerweb.com/eric/tools/css/reset/
  5) https://www.schemecolor.com/pokemon-colors.php
  6) https://favicon.io/favicon-converter/
*/