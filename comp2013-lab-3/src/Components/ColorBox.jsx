import { useState } from "react";
import data from "../Data/data";
// const colourData = data;
const random = Math.floor(Math.random() * data.length); // this is working

export default function ColorBox({ colors }) {
  const [newColor, setNewColor] = useState();
  const colorOnClick = () => {
    setNewColor((prevNewColor) => {
      newColor = (random, colors[random]);
      return { ...prevNewColor, newColor };
    });
  };
  //console.log(newColor);
  // style = { backgroundColor: newColor };

  // const colour = (random, colourBox[random]);
  //           console.log(colourBox[random]);
  //           // style = { backgroundColor: colourBox[random] };
  //           return { ...prevBoxColor, colour };

  return (
    <div
      className="ColorBox"
      // key={index}
      onClick={() => colorOnClick()}
      style={{ backgroundColor: colors }}
    ></div>

    // <div className="ColorBoxesContainer" style={{ backgroundColor: "yellow" }}>
    //   {/* {colors.map((color, index) => ( */}
    //   <div
    //     className="ColorBox"
    //     // key={index}
    //     // style={{ backgroundColor: color }}
    //     onClick={() => handleClick(colors)}
    //   ></div>
    //   {/* ))} */}
    // </div>
  );
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  /////////////////////////////////////////////////////////////////////
  // console.log(colourData);
  // const [boxColor, setBoxColour] = useState({
  //   //compound state to track the product quanity
  //   colourBox: colourBox[random],
  // });
  // //
  // // console.log(random, colourBox[random]);
  // return (
  //   <div className="ColorBox">
  //     {/* create a button */}
  //     <button
  //       onClick={() =>
  //         setBoxColour((prevBoxColor) => {
  //           const colour = (random, colourBox[random]);
  //           console.log(colourBox[random]);
  //           // style = { backgroundColor: colourBox[random] };
  //           return { ...prevBoxColor, colour };
  //         })
  //       }
  //     ></button>
  //   </div>
  //);
}

// <select
//         value={productQuanity.priceOptions}
//         onChange={(e) => {
//           setProductQuantity((prevData) => {
//             return { ...prevData, priceOptions: parseFloat(e.target.value) };
//           });
//         }}
//       >
//         {priceOptions.map((price, index) => (
//           <option key={index} value={price}>
//             {price.toFixed(2)}
//           </option>
//         ))}
//       </select>

//  <button
//       onClick={() =>
//         setProductQuantity((prevData) => {
//           return { ...prevData, quantity: prevData.quantity + 1 }; // not ++ becasue then it will only add
//           // when it referses, so it wont work for the first click
//         })
//       }
//     ></button>
