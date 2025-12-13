import FormComponent from "./FormComponent";
import axios from "axios";
import { useState } from "react";

export default function RegisterPage() {
  // States
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");

  // Handlers
  const handelOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  // asyny function is for taling to server
  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        ...formData,
      });
      setPostResponse(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    handleRegister();
    setFormData({ username: "", password: "" });
  };

  return (
    <div>
      <FormComponent
        formData={formData}
        postResponse={postResponse}
        handelOnChange={handelOnChange}
        handelOnSubmit={handelOnSubmit}
        currentPage="Register"
        nextPage="login"
      />
    </div>
  );
}
