import React, { useEffect } from "react";
import lg3 from "./img/lg3.jpg";
import firebase from "./firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./firebase/login";

export default function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const submit = document.querySelector(".container");
    submit.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      login(email, password).then((res) => navigate("../gms/services"));
      //   if (status !== "rejected") {
      //     navigate("../gms/services");
      //   }
    });
  }, []);

  return (
    <div
      style={{
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        margin: "auto",
      }}
    >
      <div class="container-fluid nav-container">
        <div class="profile-heading">
          <h1 class="animate__animated animate__lightSpeedInLeft">Login</h1>
        </div>
        <div class="back">
          <Link
            to={"../gms/home"}
            class="animate__animated animate__lightSpeedInRight"
          >
            Back To Homepage
          </Link>
        </div>
      </div>
      <form
        action="POST"
        class="container"
        style={{ margin: "auto", width: "30%" }}
      >
        <h1>Login</h1>

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          id="email"
          name="email"
          required
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          id="password"
        />

        <button type="submit" class="btn">
          Login
        </button>
        <p>
          Don't have an Account?
          <Link to="../gms/register">Click Here To Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
