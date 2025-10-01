import { useState } from "react";
//anything with a use is called a hook
//useSate will create a variable that we store stuff in
// and a fucntion responsble for updating that varaible
export default function Counter() {
  // counter = the varaible, setCounter = its fucntion (setter function)
  // alwways created in that order
  // use state takes an argumnet that is the initail state of your variable
  let initialState = 0;
  //you do not have to use a variable for this but using one helps make
  //sure you only have to chnage the code in one place (code smell)
  const [counter, setCounter] = useState(initialState);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add to counter</button>
      <button onClick={() => setCounter(counter - 1)}>
        Subtract from counter
      </button>
      <button onClick={() => setCounter(initialState)}>Reset</button>
    </div>
  );
}
