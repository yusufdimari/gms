import logo from "./logo.svg";
import lg1 from "./img/lg1.jpg";
import lg2 from "./img/lg2.jpg";
import lg3 from "./img/lg3.jpg";
import lg4 from "./img/lg4.jpg";
import "./css/style.css";
import "./App.css";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Error from "./Error";
import LoginPage from "./LoginPage";
import Register from "./Register";

function App() {
  return (
    <body>
      <Router>
        <Routes>
          <Route
            path="/gms/*"
            element={
              <>
                <NavBar />
                <Error />
              </>
            }
          />
          <Route path="/gms/" element={<Home />} />
          <Route path="/gms/home" element={<Home />} />
          <Route path="/gms/login" element={<LoginPage />} />
          <Route path="/gms/register" element={<Register />} />
          <Route path="/gms/services" element={<Services />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
