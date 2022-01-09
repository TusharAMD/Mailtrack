import {useEffect,useState} from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import 'material-icons/iconfont/material-icons.css';
function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [response,setResponse]=useState({"data":{"res":[]}})
  const [bool,setBool] = useState(false)
  useEffect(() => {
    axios.post("https://mailtracktva.herokuapp.com/dashdata", { "email": user.email })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setResponse(res.data)
        console.log(user)
        setBool(true)
      })
  },[]);
  
  return (
    <div className="dashboard">
        <div className="sendmail"><div><a href="send">Send Mail</a><span className="material-icons-round"> send </span></div></div>
        <h1>Dashboard</h1>
        <div className="DashboardContents">
        <div className="Firstline">

        </div>
        <div className="mails">
        
            <table cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Number of Times opened</th>
              </tr>
              
              {bool && response.res.map(({opened,receiver,sender})=>
              
              <tr>
                <td>{sender}</td>
              <td>{receiver}</td>
                <td>{opened.length} times {opened}</td>
              </tr>
              
              )}
              
              </tbody>
            </table>
            
                
        </div>
        </div>
        
    </div>
  );
}

export default Dashboard;
