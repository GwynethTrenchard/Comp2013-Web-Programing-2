import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      {/* <a href="/register"> Go to register page with an anchor</a> */}
      <br />
      {/* <a href="/register"> Go to register page with a link</a> */}

      <Link to={"/register"}> register page </Link>
      <br />
      <Link to={"/login"}>login page </Link>
      <br />
      <Link to={"/private"}>private page </Link>
      <br />
      <Link to={"/notarealpage"}> page not found </Link>
      <br />
      <Link to={"/notauthorized"}> not Authrorized</Link>
    </div>
  );
}
