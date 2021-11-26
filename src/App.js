import "./App.css";
import Floor from "./components /Floor/Floor";
import Lift from "./components /Lift";

function App() {
  const noOfFloors = 5;
  const floors = [];
  for (var i = 0; i < noOfFloors; i++) {
    floors.push(<Floor floorNumber={i}/>);
  }
  return (
    <div className="App">
      <h1>Lift simulation</h1>
      {/* <Floors floorsCount={noOfFloors}/> */}
      <div className="floors__container">{floors}</div>
        <Lift />
    </div>
  );
}

export default App;
