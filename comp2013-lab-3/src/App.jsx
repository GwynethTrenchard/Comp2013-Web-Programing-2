import "./App.css";
import ColorBoxesContainer from "./Components/ColorBoxesContainer";
import data from "./Data/data";

function App() {
  return (
    <>
      <ColorBoxesContainer data={data} />
    </>
  );
}

export default App;
