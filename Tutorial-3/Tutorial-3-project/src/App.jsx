import "./App.css";
import Clicker from "./Components/Clicker.jsx";
import ClickerWithProps from "./Components/clickerWithProps.jsx";
import EmptyForm from "./Components/emptyform.jsx";
import ListingContainer from "./Components/listingContainer.jsx";
import data from "./data/data.js";

function App() {
  //let listing = data[0];
  return (
    <>
      <h1>Resorts Life</h1>

      <ListingContainer items={data} />
      <Clicker />
      <EmptyForm />
      <ClickerWithProps
        message={"this is a message with props"}
        btnText={"click me for a message"}
      />
    </>
  );
}

export default App;
