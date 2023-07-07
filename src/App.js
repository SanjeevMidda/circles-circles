import "./index.css";
import Circle from "./components/Circle";

function App() {
  return (
    <div className="App">
      <Circle
        width="10vw"
        height="10vw"
        backgroundColor="linear-gradient(rgba(rgba(255, 0, 0, 0.458), rgba(255, 255, 0, 0.411)))"
        zIndex={1}
      />
      <Circle
        width="20vw"
        height="20vw"
        backgroundColor="linear-gradient(rgba(rgba(255, 166, 0, 0.411), rgba(255, 192, 203, 0.467)))"
        zIndex={2}
      />
      <Circle
        width="30vw"
        height="30vw"
        backgroundColor="linear-gradient(rgba(rgba(128, 128, 128, 0.45), rgba(165, 42, 42, 0.438)))"
        zIndex={3}
      />
      <Circle
        width="40vw"
        height="40vw"
        backgroundColor="linear-gradient(rgba(128, 0, 128, 0.442), rgba(255, 192, 203, 0.431))"
        zIndex={4}
      />
      <Circle
        width="50vw"
        height="50vw"
        backgroundColor="linear-gradient(rgba(rgba(255, 255, 0, 0.438), 0, 0.379), yellow)"
        zIndex={5}
      />
    </div>
  );
}

export default App;
