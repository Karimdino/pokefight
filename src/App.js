import "./App.css";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";



export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="gameboy">
      <Pokedex />
      </div>
     </div>
  );
}

 
      
