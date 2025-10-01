import Listing from "./listing";

export default function ListingContainer({ items }) {
  return (
    <div className="ListingsContainer">
      {items.map((item) => (
        <Listing
          //method 3 (the better way)
          key={item.id} //data needs a unique id
          {...item} //used to replace eveything, item spread.
          // take eveyrey key inside the obejct and trun it intoi its own variable

          //method 2
          //   pic={item.pic}
          //   country={item.country}
          //   location={item.location}
          //   price={item.price}
          //   rating={item.rating}
        />
      ))}
    </div>
  );

  //method 1

  //     let listings = [];
  //     item.forEach((item)) => {
  //         listing.push(

  //         <Listing

  //             pic={item.pic}
  //             country={item.country}
  //             location={item.location}
  //             price={item.price}
  //             rating={item.rating}

  //         />
  //     );
  // }
}
