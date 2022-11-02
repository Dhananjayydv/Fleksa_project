import Head from "next/head"
import React, { useState } from 'react';
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from "../components/Reservation.module.css";
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css"; 
  

function reservation() {
  const [startDate, setStartDate] = useState(new Date());  
  return (
        <>
          <Navbar/>
          <Head>
          <title>Good Taste | Frankfurt am Main</title>
          <link rel="icon" href="/titleicon.jpg" />
          </Head>
      
           <div style={{ marginBottom:"10rem"}}>
             <h1 style={{textAlign:"center",fontSize:"40px",marginTop:"100px"}}>TABLE RESERVATION</h1>
             <p style={{textAlign:"center", marginBottom:"50px",fontSize:"24px"}}>We look forward to serving you.</p>
             <div style={{display:"flex" , justifyContent:"center"}}>
             <div className="datepicker" style={{width:"500px" , marginRight:"30px",padding:"20px" , height:"250px",borderRadius:"10px",backgroundColor:"rgb(233, 227, 227)",opacity:"0.5"}}>
                   <p>Number of persons, Date and Time​  <span style={{color:"red"}}>*</span></p>
                   <form className={styles.form}>
                    {/* <label htmlFor="totalPerson" style={{margin:"10px"}}>Number of Person:</label> */}
                    <select name="totalPerson" id="totalPerson" style={{padding:"10px"}}>
                      <option value="2">2</option>
                      <option value="2">3</option>
                      <option value="2">4</option>
                      <option value="2">5</option>
                      <option value="2">6</option>
                      <option value="2">7</option>
                      <option value="2">8</option>
                      <option value="2">9</option>
                      <option value="2">10</option>
                    </select> <br />
                    {/* <label htmlFor="selectedDate" style={{paddingTop:"70px"}}>Date:</label> */}
                    {/* <DatePicker selected={startDate} className={styles.selectDate} onChange={(date:any) =>setStartDate(date)} />   */}
                    <input type="date" className={styles.selectDate}/>
                    <div style={{border:"1px solid grey",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"5px 10px"}}>
                       <p>15:00</p>
                    </div>
                   </form>
             </div>
             <div className={styles.reservationForm}>
                 <form >
                   <label htmlFor="res_Name">Name <span style={{color:"red"}}>*</span></label>
                   <br />
                   <input type="text" id="res_Name" placeholder="Enter your name"/>
                   <br />
                   <label htmlFor="res_Email">Email <span style={{color:"red"}}>*</span></label>
                   <br />
                   <input type="text" id="res_Email" placeholder="Enter your email"/>
                   <br/>
                   <label htmlFor="res_Phone">Phone Number <span style={{color:"red"}}>*</span></label>
                   <br />
                   <input type="Number" id="res_Phone"/>
                   <br />
                   <label htmlFor="res_Comment">Comment</label>
                   <br />
                   <textarea name="res_Comment" id="res_Comment" ></textarea>
                   <p>By continuing, you agree to Fleksa's Terms of use and Privacy Policy</p>
                   <button type="submit">Reserve Now</button>
                 </form>
             </div>
             </div>
             <img src="/couple.svg" alt="" className={styles.res_bgImg}/>
           </div>
           <Footer/>
        </>
       
  
  )

}

export default reservation