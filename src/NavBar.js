import React, { useEffect, useState } from "react";
import lg3 from "./img/lg3.jpg";
import "./css/style.css";
import { Link, useNavigate } from "react-router-dom";
import firebase from "./firebase/firebase";

export default function NavBar() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("No user");
      }
    });
  }, [user]);
  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  }

  return (
    <div class="container-fluid nav-container">
      <div class="toggler">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <nav>
        <ul class="nav">
          <li>
            <Link to={"../gms/home"} class="dash-active">
              HOME <i class="fa fa-tachometer" aria-hidden="true"></i>
            </Link>
          </li>

          {!user ? null : (
            <li>
              <Link to={"../gms/services"}>
                SERVICES<i class="fa fa-power-off" aria-hidden="true"></i>
              </Link>
            </li>
          )}

          <li>
            <Link to={"gms/contact"}>
              CONTACT<i class="fa fa-power-off" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to={"../gms/about"}>
              ABOUT<i class="fa fa-power-off" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to={"../gms/register"}>
              REGISTER <i class="fa fa-user" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            {!user ? (
              <Link to={"../gms/login"}>
                LOGIN<i class="fa fa-power-off" aria-hidden="true"></i>
              </Link>
            ) : (
              <div class="logout" style={{ color: "#fff" }} onClick={logout}>
                LOGOUT<i class="fa fa-power-off" aria-hidden="true"></i>
              </div>
            )}
          </li>
        </ul>
        <div class="user-img animate__animated animate__swing">
          <img
            src={lg3}
            alt="avater-img"
            class="img-circle"
            style={{ width: 100, height: 100 }}
          />
        </div>
      </nav>
      <div class="user-intro">
        <h1 class="animate__animated animate__tada">
          Welcome to <span>Greg & Co ICT Hub</span>,
        </h1>
        <h4 class="animate__animated animate__lightSpeedInLeft">
          We have a few things for you to look at.
        </h4>
      </div>
    </div>
  );
}
