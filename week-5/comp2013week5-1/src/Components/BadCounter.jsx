//this is not the correct way to store minipulate and re-render components
export default function BadCounter() {
  let count = 0;
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Add to counter
      </button>
    </div>
  );
}
