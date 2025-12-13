import ContactCard from "./ContactCard";

export default function ContactsCardContainer({ contacts }) {
  return (
    <div>
      {contacts.map((contactItem) => (
        <ContactCard key={contactItem._id} {...contactItem} />
      ))}
    </div>
  );
}
