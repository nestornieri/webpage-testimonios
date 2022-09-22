import logo from './logo.svg';
import './App.css';
import Testimonio from "./componentes/Testimonio.jsx";

function App() {
  return (
    <div className="App">
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      <Testimonio
      imagen = "Emma"
      nombre ="Emma Watson"
      pais="Suecia"
      cargo="Ingeniera de Software"
      empresa="Spotify"
      testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."/>

      <Testimonio
      imagen = "Sarah"
      nombre ="Sarah Connor"
      pais="Inglaterra"
      cargo="Ingeniera de Software"
      empresa="Facebook"
      testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."/>

      <Testimonio
      imagen = "Shawn"
      nombre ="Shawn Style"
      pais="Peru"
      cargo="Ingeniera de Sistemas"
      empresa="Google"
      testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."/>
    </div>
  );
}

export default App;
