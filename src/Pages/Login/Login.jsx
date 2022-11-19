import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logins } from "../../redux/action/AuthActions";
import "../Login/Login.css";

export const Login = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state?.AuthReducer?.message)
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input?.username != "" || input?.password != "") {
      console.log(input)
      dispatch(Logins(input, navigate));
    }
  };
  return (
    <>
    <h2>{errorMessage? errorMessage : ""}</h2>
    <form action="action_page.php" onSubmit={handleSubmit} method="post">
      <div className="imgcontainer">
        <img src="/login.jpg" alt="Avatar" className="avatar" width="100px" height="400px" />
      </div>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          onChange={handleChange}
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
          Remember me
        </label>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn">
          Cancel
        </button>
        <span className="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div>
    </form>
    </>
  );
};
