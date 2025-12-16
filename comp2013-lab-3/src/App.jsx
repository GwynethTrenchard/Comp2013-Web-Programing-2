import "./App.css";
import ColorBoxesContainer from "./Components/ColorBoxesContainer";
import data from "./Data/data";

function App() {
  return (
    <>
      <ColorBoxesContainer colors={data} />
    </>
  );
}

export default App;
