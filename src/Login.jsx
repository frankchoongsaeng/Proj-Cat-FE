import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = (props) => {
const[password, setPassword] = useState('');
const [matricNo, setMatricNo] = useState('');

const handleSubmit = (e) =>  {
    e.preventDefault();
    console.log(password, matricNo);


    axios.post('https://project-cataloging.onrender.com/api/auth/login/student',
    {
        matricNo,
        password,
    }
   
    )

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

}



    return (
        <div className="auth-form-container">
            <h2 className="app-container">Student Login</h2>
            <form className="login-form"onSubmit= {handleSubmit}>
                <label htmlFor="matricNo"> Matric Number </label>
                <input value={matricNo} onChange={(e) => setMatricNo(e.target.value)} type="matricNo" id="matricNo" placeholder="matric number" name="matricNo" />
                   
            
                <label htmlFor="password"> Password </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder= "********" id="password" name="password"/>
               <button type="submit">Log In</button>
            </form>
            <Link to="/Register"><button className="link-btn">Don't have an account? Register here.</button></Link>
         </div>
    )    
    }