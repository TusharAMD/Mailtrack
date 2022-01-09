import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
  <Auth0Provider
    domain="dev-tunpnb2c.us.auth0.com"
    clientId="oe2wmApo1Zrm1qL47O1UeWUnrPKhmHL1"
    redirectUri={window.location.origin}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    <div className="App">
      <Navbar />
    </div>
  </Auth0Provider>
  );
}

export default App;
