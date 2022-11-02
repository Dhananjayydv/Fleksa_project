import React,{useRef} from 'react'
import Navbar from '../components/Navbar'
import styles from "../components/Login.module.css"
// import Image from 'next/image';
function login() {
  const loginWithMailRef = useRef<HTMLInputElement>(null);
  const loginWithPhoneRef = useRef<HTMLInputElement>(null);
  const loginWithPhoneInputRef = useRef<HTMLInputElement>(null);
  const loginWithMailInputRef = useRef<HTMLInputElement>(null);

  function loginWithMailClick(){
    // console.log(loginWithMailRef.current);
    // loginWithMailRef.current?.style
    console.log(loginWithMailInputRef.current?.classList)
    loginWithPhoneInputRef.current?.classList.add('Login_hideLoginWithPhone__E8P19');
    loginWithMailInputRef.current?.classList.remove('Login_hideLoginWithMail__rtCCl');
    
  }
  function loginWithPhoneClick(){
    console.log(loginWithPhoneRef.current);
    console.log(loginWithPhoneInputRef.current?.classList)
    loginWithMailInputRef.current?.classList.add('Login_hideLoginWithMail__rtCCl');
    loginWithPhoneInputRef.current?.classList.remove("Login_hideLoginWithPhone__E8P19")

  }

  return (
    // <div>login</div>
    <>
    <Navbar/>
    <div className={styles.loginContainer}>
        <img src="https://goodtaste.fleksa.de/_next/image?url=https%3A%2F%2Fd1nfw7b4288zmf.cloudfront.net%2Fshop%2Fimg%2Fcover%2Fprodtestres%2F13baeb75610a73d4.webp&w=3840&q=75" />
        <div className={styles.loginCard}>
            <h2>Login</h2>
            <p>Please enter your phone or email for OTP verification.</p>
            <form>
            <div className="loginMethod">
                <h4 ref={loginWithMailRef} onClick={loginWithMailClick}>Login With Email</h4>
                <h4 ref={loginWithPhoneRef} onClick={loginWithPhoneClick}>Login With Phone</h4>
                {/* <label htmlFor="loginWithMail" >Login with Email</label> */}
                {/* <label htmlFor="loginWithPhone">Login with Phone</label><br /> */}
                <input type="Email" id='loginWithMail' ref={loginWithMailInputRef} placeholder='test@gmail.com'/><br />
                <input type="Number" id='loginWithPhone' className={styles.hideLoginWithPhone}  ref={loginWithPhoneInputRef} placeholder="+91XXXXXXXXXX" />
            </div>
            <button>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default login