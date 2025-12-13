import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

// this page is identical

export default function PrivatePage() {
  const [currentUser, setCurrentUser] = useState(() => {
    const jwtToken = Cookies.get("jwt-authorization");
    if (!jwtToken) {
      return "";
    }
    try {
      const decodedToken = jwtDecode(jwtToken);
      return decodedToken.username;
    } catch {
      return "";
    }
  });

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  // to secure the privte page

  useEffect(() => {
    if (!currentUser) {
      navigate("/notauthorized");
    }
  }, []); //the warning is fine on the [] ignore it

  const handleLogout = () => {
    Cookies.remove("jwt-authorization");
    setCurrentUser("");
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome {currentUser} to the private page</h1>
      <button onClick={() => handleLogout()}>Logout</button>
      <br />
      <Link to={"/"}>Go to Home page</Link>
    </div>
  );
}
