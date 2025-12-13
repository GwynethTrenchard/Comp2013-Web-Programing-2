import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <hr />
      <div className="cards-collection">
        <div className="card">
          <Card
            image="src/assets/images/1.jpg"
            name="Indonisia"
            place="Gili Air Hotel"
            starRating="4.8 ★"
            price="$589/night"
          />
        </div>

        <div className="card">
          <Card
            image="src/assets/images/2.jpg"
            name="Seychelles"
            place="Hilton Resort"
            starRating="4.2 ★"
            price="$629/night"
          />
        </div>

        <div className="card">
          <Card
            image="src/assets/images/3.jpg"
            name="US Virgin Islands"
            place="Goa Resort"
            starRating="3.5 ★"
            price="$485/night"
          />
        </div>

        <div className="card">
          <Card
            image="src/assets/images/4.jpg"
            name="Bahamas"
            place="Kuredu Resort"
            starRating="4.1 ★"
            price="$729/night"
          />
        </div>

        <div className="card">
          <Card
            image="src/assets/images/5.jpg"
            name="Mauritius"
            place="Tour D'eau Dounce"
            starRating="4.9 ★"
            price="$877/night"
          />
        </div>

        <div className="card">
          <Card
            image="src/assets/images/6.jpg"
            name="Bermuda"
            place="Staniel City Hotel"
            starRating="3.2 ★"
            price="$365/night"
          />
        </div>
      </div>
    </>
  );
}

export default App;

// import "./App.css";
// import Card from "./Components/Card";

// function App() {
//   return (
//     <>
//       <h1>Diamond World</h1>
//       <div className="cards-collection">
//         <Card name="Round" price="$966" image="src/assets/1-round.jpg" />
//         <Card
//           name="Princes"
//           price="$799"
//           image="src/assets/2-princess.jpg"
//           sale
//         />
//         <Card
//           name="Collection"
//           price="$1,699"
//           image="src/assets/3-collection.jpg"
//           sale
//         />
//       </div>
//     </>
//   );
// }

// export default App;
