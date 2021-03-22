import Hambi from "./components/Hambi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import './App.css';

//build: https://github.com/anitavttcs/anitavttcs.github.io
//https://hub.docker.com/

function App() {
  return (
    <div className="App">
      <Hambi />
      <h1 id="heading">MEDIA APPEREANCES</h1>
      <div id="content">
        <div id="textDiv1" className="contDiv">
          <h3>Science</h3>
          <h3>Magazine</h3>
          <h3>11. 12. 2018</h3>
          <p>Want to master your professional and social networks to maximize recognition? Want to learn how to build productive teams that create lasting impact? In his new book, The Formula: The Universal Laws of Success, Albert-László Barabási translates almost a decade of scholarly research on the science of success into a lively...</p>
          <a href="/#" className="linkMore">READ MORE</a>
        </div>
        <div id="textDiv2" className="contDiv">
          <h3>Nature</h3>
          <h3>27. 11. 2018</h3>
          <p>Originally printed by the national Academies of Sciences as a poster to accompany the publication of a research paper on how diseases connect, it was subsequently reproduced by the New York Times and included in the Mapping It Out: Atlas of Contemporary Cartographies exhibition at the Serpentine Gallery in London...</p>
          <a href="/#" className="linkMore">READ MORE</a>
        </div>
        <div id="vidDiv" className="contDiv">
          <Button></Button>
          <div className="arrow-right"></div>
          <h3>Lecture at NYU</h3>
          <a href="/#" className="linkMore">WATCH</a>
        </div>
      </div>
    </div>
  );
}

export default App;
