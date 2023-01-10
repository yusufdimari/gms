import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import lg3 from "./img/lg3.jpg";
import firebase from "./firebase/firebase";

export default function Services() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  useEffect(() => {
    // console.log(user);
    let formOpen = false;
    const form = document.querySelector(".app-form");
    const button = document.querySelectorAll(".btn");
    const cancel = document.querySelector(".cancel");
    cancel.addEventListener("click", function (e) {
      e.preventDefault();
      form.style.display = "none";
      formOpen = false;
    });
    button.forEach((but) => {
      but.addEventListener("click", function (e) {
        if (!formOpen) {
          form.style.display = "block";
          formOpen = true;
        } else {
          // form.classList.remove("form-open");
          form.style.display = "none";
          formOpen = !formOpen;
        }
      });
    });
  }, []);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("../gms/login");
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
    <div>
      <div class="container-fluid nav-container">
        <div class="toggler">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <nav>
          <ul class="nav">
            <li>
              <Link to="../gms/">
                HOME <i class="fa fa-user" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to={"../gms/services"} class="dash-active">
                SERVICES <i class="fa fa-tachometer" aria-hidden="true"></i>
              </Link>
            </li>
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

            {!user ? (
              <>
                <li>
                  <Link to={"../gms/login"}>
                    LOGIN<i class="fa fa-power-off" aria-hidden="true"></i>
                  </Link>
                </li>

                <li>
                  <Link to={"../gms/register"}>
                    REGISTER <i class="fa fa-user" aria-hidden="true"></i>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <div class="logout" style={{ color: "#fff" }} onClick={logout}>
                  LOGOUT<i class="fa fa-power-off" aria-hidden="true"></i>
                </div>
              </li>
            )}
          </ul>
          <div class="user-img animate__animated animate__swing">
            <img src={lg3} alt="avater-img" class="img-circle" />
          </div>
        </nav>
        <div class="back">
          <Link
            to="../gms/"
            class="animate__animated animate__lightSpeedInRight"
          >
            Back To Home Page
          </Link>
        </div>
      </div>
      <div class="container-fluid all">
        <div class="student-container">
          <div class="student-box animate__animated animate__slideInLeft">
            <div class="student-img">
              <img src={lg3} class="img-circle" alt="" />
            </div>
            <div class="student-name">
              <h3>Computer Based Training Center</h3>
              <div class="btn">Book Now</div>
            </div>
          </div>
          <div class="student-box animate__animated animate__slideInLeft">
            <div class="student-img">
              <img src={lg3} class="img-circle" alt="" />
            </div>
            <div class="student-name">
              <h3>Computer Test Center</h3>
              <div class="btn">Book Now</div>
            </div>
          </div>
          <div class="student-box animate__animated animate__slideInLeft">
            <div class="student-img">
              <img src={lg3} class="img-circle" alt="" />
            </div>
            <div class="student-name">
              <h3>Multipurpose Event Hall</h3>
              <div class="btn">Book Now</div>
            </div>
          </div>
          <div class="student-box animate__animated animate__slideInRight">
            <div class="student-img">
              <img src={lg3} class="img-circle" alt="" />
            </div>
            <div class="student-name">
              <h3>Travel And Tours</h3>
              <div class="btn">Book Now</div>
            </div>
          </div>
        </div>
      </div>
      <div class="app-form container-fluid dash-content profile ">
        <form action="" method="POST" enctype="multipart/form-data">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">FirstName</label>
              <input type="text" class="form-control" name="firstName" />
            </div>
            <div class="form-group col-md-6">
              <label for="">LastName</label>
              <input type="text" class="form-control" name="lastName" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">MiddleName</label>
              <input type="text" class="form-control" name="middleName" />
            </div>
            <div class="form-group col-md-6">
              <label for="">Address</label>
              <input type="text" class="form-control" name="address" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">Age</label>
              <input type="text" class="form-control" name="age" />
            </div>
            <div class="form-group col-md-6">
              <label for="">Email</label>
              <input type="email" class="form-control" name="email" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">Password</label>
              <input type="password" class="form-control" name="password" />
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
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">Reason For Registration</label>
              <select name="role" class="form-control" id="">
                <option selected>Choose...</option>
                <option value="teacher">CBT Exams</option>
                <option value="student">Computer Test</option>
                <option value="student">Multi Purpose Event Hall</option>
                <option value="student">Travel And Tours</option>
                <option value="student">TOEFL And IELTS Exam</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <input
                type="submit"
                class=" form-control btn-primary add-btn align pay"
                name="paynow"
                value="Pay Now"
              />
              <input
                type="submit"
                class=" form-control btn-primary add-btn  align cancel"
                name="cancel"
                value="Cancel"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
