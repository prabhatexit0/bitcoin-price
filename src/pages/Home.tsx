import '../styles/home.css'
import bitcoinWalletImage from '../assets/bitcoin-wallet.png'

function Home() {
  return (
    <div className="home-container">
      <img id="bitcoin-wallet-img" src={bitcoinWalletImage} alt="bitcoin wallet image" />
      <h1> Welcome to Bitcoin Price </h1>
    </div>
  )
}

export default Home