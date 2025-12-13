import { useEffect, useState } from "react";
import axios from "axios";
import ContactsCardContainer from "./ContactsCardContainer";
import ContactForm from "./ContactForm";

export default function ContactsApp() {
  // states
  const [contactsData, setContactsData] = useState([]);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
  });

  const [postResponse, setPostResponse] = useState("");

  // useEffect
  useEffect(() => {
    handleContactsDB();
  }, []);

  // handlers
  // GET data from db handaler
  const handleContactsDB = async () => {
    try {
      const response = await axios.get("http://localhost:3000/contacts");
      //   console.log(response);

      setContactsData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // handle the submission of data

  const handleOnSubmit = async () => {
    try {
      await axios
        .post("http://localhost:3000", formData)
        .then((response) => setPostResponse(response.data.message));
    } catch (error) {
      console.log(error.message);
    }
  };

  // handle the onChange event for the form

  const handleOnChange = (e) => {
    setformData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  // render
  return (
    <div>
      <ContactForm
        name={formData.name}
        contact={formData.contact}
        image={formData.image}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
      />
      <ContactsCardContainer contacts={contactsData} />
    </div>
  );
}
