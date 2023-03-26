/* eslint-disable no-restricted-globals */
import React, { useState } from "react"
import GetStrength from "./GetStrength"; //

const Password =()=>{
    const [password,setpassword]=useState('');
    const PasswordChange=(event)=>{setpassword(event.target.value);};
    return(
        
        <div>
            <input type="password" id="pwd" placeholder="Type Your Password Here" value={password} onChange={PasswordChange}/>
            <GetStrength newPassword={password}/>            
        </div>
    );
};
export default Password;