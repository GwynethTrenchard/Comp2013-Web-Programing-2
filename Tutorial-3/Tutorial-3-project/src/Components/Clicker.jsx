const clickMessage = () => {
  console.log("This is a clicker function!");
};

export default function Clicker() {
  //to make an external function function properly is an event handler, we need to remove the
  // breakets and keep the function name without the brakets
  return <button onClick={clickMessage()}>Click Me</button>;
}
