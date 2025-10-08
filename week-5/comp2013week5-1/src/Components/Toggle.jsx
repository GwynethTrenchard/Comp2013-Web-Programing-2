import { useState } from "react";
export default function Toggle() {
  const [isHappy, setIsHappy] = useState(true);

  return (
    <div>
      <h1>{isHappy ? "😊" : "🙁"}</h1>
      <button onClick={() => setIsHappy(!isHappy)}>
        {isHappy ? "Sad Face" : "Happy Face"}
      </button>
    </div>

    // h1 - askes if isHappy is true, if true print frist thing else pint other
    // button 1- when clicked setIsHappy sets isHappy to whatever its not
    // buton 2- same concept as h1 line
  );
}
