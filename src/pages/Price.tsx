import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import '../styles/price.css'
import exchangeImg from '../assets/exchange.png'
import loginImg from '../assets/login.png'

function Price() {
  let ctx = useContext(AuthContext);

  return (
    <div id="price-cont">
    {!ctx?.currentUser ?
    <div>
      <img src={loginImg} alt="Login Image" className="price-img" />
      <h1>Login First</h1> 
    </div>
    : ctx.currentUser.emailVerified ? <CurrentBtcPrice/> : 
    <h3>Verify Email First</h3>
    }
    </div>
  )
}

function CurrentBtcPrice() {
  let ctx = useContext(AuthContext);

  let [bitcoin, setBitcoin] = useState("");
  const getBtc = async () => {
    let btc = await await (
      await fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    ).json();
    setBitcoin(btc.market_data.current_price.usd);
  };

  useEffect(() => {
    getBtc();
  }, []);

  return (
    <div id="price-img-cont">
      <img  src={exchangeImg} alt="exchange bitcoin usd" className="price-img" />
      <h1>Current Price of Bitcoin is: {bitcoin} USD</h1>
    </div>
  );

}

export default Price;
