import { useAuth0 } from "@auth0/auth0-react";
import 'material-icons/iconfont/material-icons.css';
import {useState} from 'react';
import axios from 'axios';
function SendMail() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const[useremail,setUseremail]=useState("")
  const[userpass,setUserpass]=useState("")
  const[subject,setSubject]=useState("")
  const[mailcontent,setMailcontent]=useState("")
  const[recemail,setRecemail]=useState("")
  
  function handleSubmit(){
      
      axios.post("https://mailtracktva.herokuapp.com/sendemail", { useremail,userpass, subject, mailcontent, recemail })
      .then(res => {
        console.log(res);
        console.log(res.data);
        
      })
  }
  
  return (
    <div className="SendEmailPage">
        <div className="EmailForm">
        <form>
        <input value={useremail} onChange={(e)=>setUseremail(e.target.value)} placeholder="Please Enter Your Mail ID"/>
        <input type="password" value={userpass} onChange={(e)=>setUserpass(e.target.value)} placeholder="Please Enter Your Password"/>
        <input value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="Please Enter Subject"/>
        <textarea value={mailcontent} onChange={(e)=>setMailcontent(e.target.value)} placeholder="Please Enter Mail Content"/>
        <input value={recemail} onChange={(e)=>setRecemail(e.target.value)} placeholder="Please Enter Receiver's Email"/>
        </form>
        <button className="sendbutton" onClick={handleSubmit}>Send Mail<span className="material-icons-round">
send
</span></button>
        </div>
        
    </div>
  );
}

export default SendMail;
