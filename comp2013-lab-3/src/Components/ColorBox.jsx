import { useState } from "react";
import data from "../Data/data";
const colourData = data[0];
const random = Math.floor(Math.random() * data.length); // this is working

export default function ColorBox({ colourBox = colourData }) {
  console.log(colourData);
  const [boxColor, setBoxColour] = useState({
    //compound state to track the product quanity
    colourBox: colourBox[0],
  });
  //
  // console.log(random, colourBox[random]);
  return (
    <div className="ColorBox">
      {/* create a button */}
      <button
        onClick={() =>
          setBoxColour((prevData) => {
            const colour = (random, colourBox[random]);

            return { ...prevData, colour };
          })
        }
      ></button>
    </div>
  );
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
