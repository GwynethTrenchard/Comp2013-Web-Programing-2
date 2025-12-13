export default function Card(props) {
  return (
    <div>
      <img src={props.image} alt="" className="image" />
      <h3>{props.name}</h3>
      <h5>{props.place}</h5>
      <p>{props.starRating}</p>
      <p>{props.price}</p>
    </div>
  );
}
