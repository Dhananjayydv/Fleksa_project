import React,{useRef} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
// import  "../components/Contact.module.css"
import styles from "../components/Contact.module.css";
import Footer from '../components/Footer';

function contact() {
  const shopTimeInfoCardRef = useRef<HTMLInputElement>(null);
  const deliveryTimeInfoCardRef = useRef<HTMLInputElement>(null);
  function onShopTimeClick(){
      shopTimeInfoCardRef.current?.classList.toggle("Contact_shopTimeInfoCard__4BNUJ")
      if(!deliveryTimeInfoCardRef.current?.classList.contains("Contact_deliveryTimeInfoCard__mydv0")){
           deliveryTimeInfoCardRef.current?.classList.toggle("Contact_deliveryTimeInfoCard__mydv0");
      }    
  }
  function ondeliveryTimeClick(){
    deliveryTimeInfoCardRef.current?.classList.toggle("Contact_deliveryTimeInfoCard__mydv0");
    if(!shopTimeInfoCardRef.current?.classList.contains("Contact_shopTimeInfoCard__4BNUJ")){
      shopTimeInfoCardRef.current?.classList.toggle("Contact_shopTimeInfoCard__4BNUJ");
    } 
  }
  return (
        <>
        <Head>
          <title>Good Taste | Frankfurt am Main</title>
          <link rel="icon" href="/titleicon.jpg" />
          <link rel="stylesheet" href="../components/Contact.module.css" />
        </Head>
        <Navbar/>

        <div className={styles.container}>
          <div className={styles.contactusForm}>
            <h1>Write Us</h1>
            <p>We will get back to you soon as possible</p>
            <form>
              <label htmlFor="name">Name</label>
              <label htmlFor="email">Email</label><br />
              <input type="text" id='name'/>
              <input type="email" id='email'/><br />
              <div style={{display:"flex"}}>
              <div>
              <label htmlFor="phone">Phone</label><br />
              <input style={{width:"88%"}} type="number" id='phone'/><br />
              <label htmlFor="subject">Subject</label><br />
              <input style={{width:"88%"}}  type="text" id='subject'/><br />
              <label htmlFor="message">Your Message</label><br />
              <textarea style={{width:"88%"}} name="message" id="message"></textarea><br />
              </div>
              <img  style={{width:"50%"}} src="contact_us_main_img.svg" alt="" />
              </div>
              <div>
              
              <input style={{display:"inline" , width:"1rem"}} type="checkbox" name="t&c" id="t&c" />
              <p style={{display:"inline" , width:"1rem"}}>Yes, I agree to Terms of use and Privacy Policy</p>
              </div>
              <button type='submit' style={{backgroundColor:"black",color:"white"}}>Send</button>
            </form>
           </div>
            <div className={styles.contactInfo}>
              <div className={styles.shopTime}>
                <h3 onClick={onShopTimeClick}>Shop Time</h3>
                <div className={styles.shopTimeInfoCard} ref={shopTimeInfoCardRef} >
                <div className={styles.shopTimeDay}>
                  <p>Sunday</p>
                  <div className="time">
                    <p>15:00 - 22:00</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Monday</p>
                  <div className="time">
                    <p>11:30 - 14:30</p>
                    <p>17:30 - 22:30</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Tuesday</p>
                  <div className="time">
                    <p>11:30 - 14:30</p>
                    <p>17:30 - 22:30</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Wednesday</p>
                  <div className="time">
                    <p>11:30 - 14:30</p>
                    <p>17:30 - 22:30</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Thursday</p>
                  <div className="time">
                    <p>11:30 - 14:30</p>
                    <p>17:30 - 22:30</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Friday</p>
                  <div className="time">
                    <p>11:30 - 23:00</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Saturday</p>
                  <div className="time">
                    <p>09:00 - 18:00</p>
                  </div>
                </div>
                </div>
              </div>
              <div className="deliveryTime">
                <h3 onClick={ondeliveryTimeClick}>Delivery Time</h3>
                <div className={styles.deliveryTimeInfoCard} ref={deliveryTimeInfoCardRef}>  
                <div className={styles.shopTimeDay}>
                  <p>Sunday</p>
                  <div className="time">
                    <p>15:00 - 22:00</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Monday</p>
                  <div className="time">
                    <p>11:30 - 14:30</p>
                    <p>17:30 - 22:30</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Tuesday</p>
                  <div className="time">
                    <p>11:30 - 14:30</p>
                    <p>17:30 - 22:30</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Wednesday</p>
                  <div className="time">
                    <p>11:30 - 14:30</p>
                    <p>17:30 - 22:30</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Thursday</p>
                  <div className="time">
                    <p>11:30 - 14:30</p>
                    <p>17:30 - 22:30</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Friday</p>
                  <div className="time">
                    <p>11:30 - 23:00</p>
                  </div>
                </div>
                <div className={styles.shopTimeDay}>
                  <p>Saturday</p>
                  <div className="time">
                    <p>09:00 - 18:00</p>
                  </div>
                </div>
                
              </div>
              </div>
              <div className="emailInfo" style={{paddingBottom:"20px",paddingTop:"20px"}}>hello@fleksa.com</div>
              <div className="numberInfo" style={{paddingBottom:"20px"}}>+4969120063308</div>
              <div className={styles.companyMapMarker}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2560.4560961635584!2d8.628272!3d50.077747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4bf4f589b1653ff5!2sTandoori%20Taste%20Indian%20Restaurant%20%26%20Catering!5e0!3m2!1sen!2sus!4v1667029655986!5m2!1sen!2sus" width="400" height="400" style={{border:'0'}} loading="lazy"></iframe>
              </div>
            </div>
          
        </div>
        <Footer/>
        </>
  )
   
}

export default contact
