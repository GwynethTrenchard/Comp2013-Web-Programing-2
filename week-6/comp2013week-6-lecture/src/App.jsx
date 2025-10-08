import "./App.css";
import ProductCard from "./Components/ProductCard";
import fruits from "./data/data";

function App() {
  return (
    <>
      <ProductCard products={fruits} />
    </>
  );
}

export default App;
