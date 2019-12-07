import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./components/Toggle";

function App() {
  const [isToggled, setIsToggled] = React.useState(false);

  // useEffect triggered when any change happens?
  React.useEffect(() => {
    alert("ok");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle isToggled={isToggled} />
        <button
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          toggle it
        </button>
      </header>
    </div>
  );
}

export default App;
