// this is an evnet onClick function aka handaler

const msgOnClick = (msg) => console.log(msg);

export default function ClickerWithProps({ message, btnText }) {
  //if a handaler has a paramater and needs an arugument to work,
  // we muct use a lambda function inside the event
  return (
    <div>
      <button onClick={() => msgOnClick(message)}>{btnText}</button>
    </div>
  );
}
