import "./App.css";
import Home from "./components/home";
import LeftPanel from "./components/left-nav";

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <Home />
    </div>
  );
}

export default App;
