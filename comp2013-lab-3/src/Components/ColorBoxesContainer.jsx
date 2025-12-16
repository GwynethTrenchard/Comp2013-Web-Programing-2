import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }) {
  return (
    //className="ColorBoxesContainer"
    <div color={colors[0]}>
      {/* {data.map((color) => ( */}
      <ColorBox />
      {/* ))} */}
    </div>
  );
}

// export default function ProductCardsContainer({ data }) {
//   return (
//     <div className="ProductCardsContainer">
//       {data.map((product) => (
//         <ProductCard key={product.id} {...product} />
//       ))}
//     </div>
//   );
// }
