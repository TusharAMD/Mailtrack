import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import SendMail from './SendMail';
import { useAuth0 } from "@auth0/auth0-react";
import 'material-icons/iconfont/material-icons.css';
function Navbar() {
  const { loginWithRedirect,logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  

if (isAuthenticated){    
      return (
        <div className="Navibar">
            <ul>
            <li id = "logo" ><a href="#home"><img style={{height:"1.5em"}} src="https://i.ibb.co/vDYXr2S/path1079.png"></img>Mail Track</a></li>

            <li style={{float:"right"}}><a><div id="howtouse">How to Use <i className="material-icons-outlined">
    arrow_forward_ios</i></div></a></li>
            
            <li style={{float:"right"}}><a><div id="login" onClick={() => logout()}>Logout</div></a></li>
            <li style={{float:"right"}}><a><div>Welcome {user.name} </div></a></li>
            </ul>
            
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/dashboard" element={<Dashboard />}></Route>
                    <Route exact path="/send" element={<SendMail />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
      );
    }
else{
    return (
        <div className="Navibar">
            <ul>
            <li id = "logo" ><a href="#home"><img style={{height:"1.5em"}} src="https://i.ibb.co/vDYXr2S/path1079.png"></img>Mail Track</a></li>

            <li style={{float:"right"}}><a><div id="howtouse">How to Use <i className="material-icons-outlined">
    arrow_forward_ios</i></div></a></li>
            
            <li style={{float:"right"}}><a><div id="login" onClick={() => loginWithRedirect()}>Login</div></a></li>
            
            </ul>
            
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
      );
    }
}

export default Navbar;
