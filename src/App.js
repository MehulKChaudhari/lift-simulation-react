import "./App.css";
import Floor from "./components /Floor/Floor";
import Lift from "./components /Lift";
import Floors from "./components /Floor/Floors";

function App() {
  const noOfFloors = 5;
  const floors = [];
  for (var i = 0;i < noOfFloors;  i++) {
    floors.push(<Floor />);
  }
  return (
    <div className="App">
      <h1>Lift simulation</h1>
      {/* <Floors floorsCount={noOfFloors}/> */}
      {floors}
      <div className="lift">
        <Lift />
      </div>
    </div>
  );
}

export default App;
