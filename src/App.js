import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="text-center footer">
          <a
            href="https://github.com/CyraIftikhar/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Open-source
          </a>{" "}
          coded by Cyra Iftikhar, hosted on{" "}
          <a href="https://www.netlify.com/" rel="noreffer" target="_blank">
            {" "}
            Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
