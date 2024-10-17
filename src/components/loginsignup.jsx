import React, { useState } from "react";
import './loginsignup.css';
import user from '../Asset/acc2.png'
import email from '../Asset/email1.png'
import pass from '../Asset/password1.png'
//Thiss oll about import the photos and files from the folder and the other folder 

const Loginsignup = () => {


    const [action, setAction] = useState("Sign Up")
    //this is used for set actione like signin ena sign out lay senesera action tekeyayari enfihonelen yemenadergebet ye react hook or state managemet 
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    
                    {action === "Login" ? <div></div> : <div className="input">
                        <img src={user} alt="" />
                        <input type="text" placeholder="Name" />
                        {/* on tis we use action state for name yemilew weto signe up lay gen endisera new yemiadergew */}
                    </div>}
             

                    <div className="input">
                        <img src={email} alt="" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <img src={pass} alt="" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                {action==="Sign Up"?<div></div>:<div className="forget-password"> Forget password <span>Click here</span></div>}
               {/*kezih lay forget password yemilewn atefeten signeup lay login lay endemeta yetetekemenbet new 
*/} 
                <div className="submit-container">

                    <br /> <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login </div>
                </div>

            </div>
        </div>
    )
}


export default Loginsignup