import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/logo2.png'
import AboutAuth from './AboutAuth'
import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom'

const Auth = () => {

const [isSignup, setIsSignup] = useState(false)
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();


const handleSwitch = () => {
  setIsSignup(!isSignup);
  setName("");
    setEmail("");
    setPassword("");
};
const handleSubmit = (e) => {
  e.preventDefault()
  if (!email && !password) {
    alert("Enter email and password");
  }
  if (isSignup) {
    if (!name) {
      alert("Enter a name to continue");
    }
    dispatch(signup({ name, email, password }, navigate));
  } else {
    dispatch(login({ email, password }, navigate));
  }
  
 
};

  return (
    
    <section className='auth-section'>

{isSignup && <AboutAuth />}

     <div className='auth-container-2'>
      { !isSignup && <img src={icon} alt="stack overFlow" className='login-logo' /> }
      <form onSubmit={handleSubmit}>
        {
          isSignup && (
            <lable htmlFor="name">
        <h4>Display Name</h4>
        <input type="text" name='name' id='name' value={name}  onChange={(e) => {
                  setName(e.target.value);
                }} />
      </lable>

          )
        }
      <lable htmlFor="email">
        <h4>Email</h4>
        <input type="email" name='email' id='email' value={email} onChange={(e) => {
                setEmail(e.target.value);
              }} />
      </lable>

      <lable htmlFor="password">
        <div style={{display:"flex", justifyContent:"space-between"}}>
           <h4>password</h4>
         { !isSignup && <p style={{ color: "#007ac6",fontSize:"13px" }}>forgot password?</p> }
        </div>
        <input type="password" name='password' id='password'  value={password} onChange={(e) => {
                setPassword(e.target.value);
              }} />

      { isSignup && <p style={{ color: "#666767", fontSize:"13px"}}>Passwords must contain at least eight <br/> characters, including at least 1 <br/> letter and 1 number.</p> }
      </lable>

      {
        isSignup && (
          <lable htmlFor='check'>
            <input type='checkbox' id='check'/>
          <p style={{ fontSize:"13px"}}>Opt-in to receive occasional,<br/>product updates, user research invitations,<br/>company announcements, and digests.</p>
          </lable>
        )
      }
     <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up': 'Log in' }</button>
{
  isSignup && (
    <p style={{ color: "#666767", fontSize:"13px"}}>
      By clicking “Sign up”, you agree to our
       <span style={{ color: "#007ac6" }}> terms of<br/> service</span>,
       <span style={{ color: "#007ac6" }}> privacy policy </span> and
       <span style={{ color: "#007ac6" }}> cookie policy</span>
    </p>
  )
}
      </form>
      <p>
        {isSignup ? 'Already have an account?' : "Don't have an account?"}
        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : "sign up" }</button>
      </p>
     </div>
    </section>

  )
}

export default Auth
