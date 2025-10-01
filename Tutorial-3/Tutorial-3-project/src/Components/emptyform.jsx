// this is a submit event handler function

const handleOnSubmit = (e) => {
  e.preventDefault(); //this will prevnet the page from rebuilding  so data isent lost, e is short for event
  console.log("this is a submition form");
};

export default function EmptyForm() {
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input type="submit" />
      </form>
    </div>
  );
}
