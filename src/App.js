import "./App.css";
import Floor from "./components /Floor/Floor";
import Header from "./components /Header";
import Lift from "./components /Lift";
import Footer from "./components /Footer";

function App() {
  const noOfFloors = 5;
  const floors = [];
  for (var i = noOfFloors; i >= 0; i--) {
    floors.push(<Floor floorNumber={i} />);
  }
  return (
    <div className="App">
      <Header />
      <div className="floors__container">{floors}</div>
      <Lift />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
