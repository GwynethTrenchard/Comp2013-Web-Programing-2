import { useNavigate } from "react-router-dom";

export default function FormComponent({
  formData,
  handelOnSubmit,
  handelOnChange,
  currentPage,
  nextPage,
  postResponse,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>{currentPage}</h1>
      <form onSubmit={handelOnSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handelOnChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="passowrd"
          id="password"
          value={formData.password}
          onChange={handelOnChange}
        />
        <br />
        <button>Submit</button>
      </form>
      <p>{postResponse}</p>
      <button onClick={() => navigate(`/${nextPage}`)}>
        {nextPage === "login" ? "Go to Login Page" : "Go to Register Page"}
      </button>
    </div>
  );
}
