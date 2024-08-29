import "./App.css";
import Card from "./components/Card";
import CardReverse from "./components/CardReverse";
import NavBar from "./components/NavBar";

function App() {
  return <div className="main">
    <NavBar/>
    <Card/>
    <CardReverse/>
  </div>;
}

export default App;
