import logo from "./logo.svg";
import lg1 from "./img/lg1.jpg";
import lg2 from "./img/lg2.jpg";
import lg3 from "./img/lg3.jpg";
import lg4 from "./img/lg4.jpg";
import "./css/style.css";
import NavBar from "./NavBar";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    let slideIndex = 0;
    showSlides();
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000);
    }
  }, []);

  return (
    <div className="App">
      <NavBar />

      <div class="slideshow-container">
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src={lg1} style={{ width: "100%" }} />
          <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src={lg2} style={{ width: "100%" }} />
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src={lg4} style={{ width: "100%" }} />
          <div class="text">Caption Three</div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
    </div>
  );
}

export default Home;
