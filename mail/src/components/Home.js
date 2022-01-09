import { useAuth0 } from "@auth0/auth0-react";
function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  
  return (
    <div>
    <div className="Home">
        <div className="homecontent">
            <h1>Tracking Your Emails Is Now <br/><span>Super Easy.</span></h1>
            <p>Mail Tracker helps you to check who opened your emails, how many times with zero cost and with great accuracy.
            {isAuthenticated&&<div id="gotodash"><a href="/dashboard">Go to Dashboard</a><i className="material-icons">
            play_arrow</i></div>}
            </p>
            
        </div>
        <div className="homeimages">
            <div>
            <img src="https://i.ibb.co/BnbXcDq/g1850.png"></img>
            </div>
            <div className="circle">
            </div>
            
            {/*<h3>Made with &#10084;</h3>*/}
        </div>
    </div>
    <p className="bottomline">Made with &#128150;</p>
    </div>
  );
}

export default Home;
