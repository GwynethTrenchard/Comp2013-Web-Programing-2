import "./App.css";
import ProductCard from "./Components/ProductCard";
import ProductCardContainer from "./Components/ProductCardContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <ProductCardContainer data={data} />
    </>
  );
}

export default App;
