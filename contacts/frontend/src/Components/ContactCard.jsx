export default function ContactCard({ name, contact, image }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="" width="100px" />
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.address}</p>
    </div>
  );
}
