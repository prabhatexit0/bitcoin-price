import { useState } from "react";
import "../styles/nav.css";
import { Link, useNavigate } from "react-router-dom";
import bitcoinLogo from "../assets/bitcoin.png";

function Nav() {
  let [login, setLogin] = useState(false);
  let navigate = useNavigate();

  return (
    <div id="nav-cont">
      <div id="nav-title-logo-cont"
      onClick={
        () => {
          navigate("/")
        }
      }
      >
        <h1 id="nav-title">Bitcoin Price</h1>
        <img id="nav-bitcoin-logo" src={bitcoinLogo} alt="bitcoin logo" />
      </div>
      <ul id="navigation-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/price">Price</Link>
        </li>

        {!login ? (
          <li>
            <Link to="/auth">Profile</Link>
          </li>
        ) : (
          <li>
            <div>Logout</div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Nav;
