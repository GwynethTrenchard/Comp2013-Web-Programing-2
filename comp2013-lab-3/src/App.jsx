import "./App.css";
import ColorBoxesContainer from "./Components/ColorBoxesContainer";
import data from "./Data/data";
import ColorBox from "./Components/ColorBox";

function App() {
  return (
    <>
      {/* <ColorBoxesContainer data={data} /> */}
      <ColorBox colors={data} />
    </>
  );
}

export default App;
