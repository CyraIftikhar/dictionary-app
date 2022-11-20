import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="cat" />
        </main>
        <footer className="text-center">
          Open-source coded by Cyra Iftikhar
        </footer>
      </div>
    </div>
  );
}

export default App;
