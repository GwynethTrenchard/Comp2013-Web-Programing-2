import ColorBox from "./ColorBox";

export default function ColorBoxesContainer(colours) {
  return (
    //className="ColorBoxesContainer"
    <div color={colours[0]}>
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
