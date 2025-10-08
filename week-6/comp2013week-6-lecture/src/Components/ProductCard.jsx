import { useState } from "react";
import data from "../data/data";
const testProduct = data[0];

export default function ProductCard({
  product = testProduct.product,
  priceOptions = testProduct.priceOptions,
  img = testProduct.img,
  quantity = testProduct.quantity,
}) {
  console.log(testProduct);
  const [productQuanity, setProductQuantity] = useState({
    //compound state to track the product quanity
    quantity,
    priceOptions: priceOptions[0],
  });

  return (
    <div className="ProductCard">
      {/*image */}
      <img src={img} alt="" height="100px" />
      {/*product name */}
      <h3>{product}</h3>
      {/*product quanitity */}
      <p>Quanity: {productQuanity.quantity}</p>
      {/*price drop down menu */}
      {/*on chnage is responsible to set the state to the option the user pciks from the menue*/}
      <select
        value={productQuanity.priceOptions}
        onChange={(e) =>
          setProductQuantity({
            ...productQuanity,
            priceOptions: e.target.value,
          })
        }
      >
        {<map name=""></map>}
      </select>
    </div>
  );
}
