import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import SendMail from './SendMail';
import { motion } from 'framer-motion'
import { useAuth0 } from "@auth0/auth0-react";
import 'material-icons/iconfont/material-icons.css';
function Navbar() {
    const { loginWithRedirect, logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const buttonvariant = {
        hover: {
            scale: 1.17,
            backgroundColor: '#146356',
            color: 'white',
            transition: {
                duration: 0.1,
                ease: 'easeInOut'
            }
        }
    }

    const ulvariant = {
        hidden: {
            y: -60,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { delay: 1, duration: 0.4, type: 'spring', stiffness: 360 }
        }
    }

    if (isAuthenticated) {
        return (
            <div className="Navibar">
                <ul>
                    <li id="logo" ><a href="#home"><img style={{ height: "1.5em" }} src="https://i.ibb.co/vDYXr2S/path1079.png" alt="log"></img>Mail Track</a></li>

                    <li style={{ float: "right" }}><a><div id="howtouse">How to Use <i className="material-icons-outlined">
                        arrow_forward_ios</i></div></a></li>

                    <li style={{ float: "right" }}><a><div id="login" onClick={() => logout()}>Logout</div></a></li>
                    <li style={{ float: "right" }}><a><div>Welcome {user.name} </div></a></li>
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
    else {
        return (
            <div className="Navibar">
                <ul>
                    <motion.div variants={ulvariant} initial="hidden" animate="visible"><li id="logo" ><a href="#home"><img style={{ height: "1.5em" }} src="https://i.ibb.co/vDYXr2S/path1079.png" alt="log"></img>MailTrack</a></li></motion.div>
                    <motion.div variants={ulvariant} initial="hidden" animate="visible"><li style={{ float: "right" }}><a><motion.div variants={buttonvariant} whileHover="hover" id="howtouse">How to Use <i className="material-icons-outlined">arrow_forward_ios</i></motion.div></a></li></motion.div>
                    <motion.div variants={ulvariant} initial="hidden" animate="visible"><li style={{ float: "right" }}><a><motion.div variants={buttonvariant} whileHover="hover" id="login" onClick={() => loginWithRedirect()}>Login</motion.div></a></li></motion.div>
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
