import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "./firebase/firebase";
import { login } from "./firebase/login";

export default function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    const submit = document.querySelector(".container");
    submit.addEventListener("submit", function (e) {
      e.preventDefault();
      const fname = document.getElementById("fname").value;
      const mname = document.getElementById("mname").value;
      const lname = document.getElementById("lname").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const address = document.getElementById("address").value;
      const age = document.getElementById("age").value;
      createAccount(email, password, fname, mname, lname);
    });
  }, []);

  const createAccount = (email, password, fname, mname, lname) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        login(email, password).then((res) => navigate("../gms/login"));
      });
  };

  return (
    <div>
      <div class="container-fluid nav-container">
        <div class="profile-heading">
          <h1 class="animate__animated animate__lightSpeedInLeft">Sign Up</h1>
        </div>
        <div class="back">
          <Link
            to="../gms"
            class="animate__animated animate__lightSpeedInRight"
          >
            Back To Homepage
          </Link>
        </div>
      </div>
      <div class="container-fluid dash-content profile">
        <form
          class="container"
          action=""
          method="POST"
          enctype="multipart/form-data"
          style={{ margin: "auto", width: "50%" }}
        >
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">FirstName</label>
              <input
                type="text"
                class="form-control"
                name="firstName"
                id="fname"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="">LastName</label>
              <input
                type="text"
                class="form-control"
                name="lastName"
                id="lname"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">MiddleName</label>
              <input
                type="text"
                class="form-control"
                name="middleName"
                id="mname"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="">Address</label>
              <input
                type="text"
                class="form-control"
                name="address"
                id="address"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">Age</label>
              <input type="text" class="form-control" name="age" id="age" />
            </div>
            <div class="form-group col-md-6">
              <label for="">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                name="confirm_password"
              />
            </div>
          </div>

          <div class="form-group col-md-6">
            <input
              type="submit"
              class=" form-control btn-primary add-btn align"
              name="signup"
              value="Sign Up"
              style={{ width: 200, height: 50 }}
            />
            <Link to="../gms/login">Click Here To Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
