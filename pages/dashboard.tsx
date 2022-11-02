import React,{useRef} from 'react'
import Navbar from '../components/Navbar'
import styles from "../components/Dashboard.module.css"
import Link from 'next/link'

function dashboard() {
    const dashboardNavOptionsRef = useRef<HTMLInputElement>(null);
    function showProfileDashboard(){
        dashboardNavOptionsRef.current?.children[0].classList.remove('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[0].classList.add('Dashboard_profileDashboard__O5Fwm');
        dashboardNavOptionsRef.current?.children[1].classList.add('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[2].classList.add('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[3].classList.add('Dashboard_hide__A5QSn');
        //addressDashboard
        // 'Dashboard_addressDashboard__U4Wa9'
        //addaddressDashboard
        // 'Dashboard_addAddressDashboard__F1zl_'
           console.log(dashboardNavOptionsRef.current?.children[3].classList);
    }
    function showAddressDashboard(){
        dashboardNavOptionsRef.current?.children[0].classList.add('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[3].classList.add('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[1].classList.remove('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[1].classList.add('Dashboard_addressDashboard__U4Wa9');
    }
    function showAddAddressOption(){
        dashboardNavOptionsRef.current?.children[1].classList.add('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[3].classList.add('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[2].classList.remove('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[2].classList.add('Dashboard_addAddressDashboard__F1zl_');
    }
    function closeAddAddressOption(){
        dashboardNavOptionsRef.current?.children[2].classList.add('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[1].classList.remove('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[1].classList.add('Dashboard_addressDashboard__U4Wa9');    
    }
    function showPointsDashboard(){
        dashboardNavOptionsRef.current?.children[0].classList.add('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[1].classList.add('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[2].classList.add('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[3].classList.remove('Dashboard_hide__A5QSn');
        dashboardNavOptionsRef.current?.children[3].classList.add("Dashboard_rewards__X2fRK");
    }

  return (   
    <>
    <Navbar/>
    <div className={styles.dashboardContainer}>
        <div className={styles.dashboardNav}>
            <div className={styles.userIcon}>U</div>
            <a className={styles.anchor} onClick={showProfileDashboard}><h4>Profile</h4></a>
            <a className={styles.anchor}><h4>My Orders</h4></a>
            <a className={styles.anchor} onClick={showPointsDashboard}><h4>Points</h4></a>
            <a className={styles.anchor} onClick={showAddressDashboard}><h4>Address</h4></a>
            <button>Log out</button>
        </div>
        <div className={styles.dashboardNavOptions} ref={dashboardNavOptionsRef}>
          {/* <div className={styles.hide}> */}
          <div className={styles.profileDashboard}>
              <label htmlFor="Name">Name</label><br />
              <input type="text" id='Name'/><br />
              <label htmlFor="Email">Email</label><br />
              <input type="email" id='Email'/><br />
              <label htmlFor="Phone">Phone Number</label><br />
              <input type="number" id='Phone'/><br />
              <div className={styles.buttons}>
                <button>Update My Details</button>
                <button>Delete My Account</button>
              </div>    
          </div>


          <div className={styles.hide}>
            <p>My Address</p>
            <button onClick={showAddAddressOption}>+ New Address</button>
          </div>


          <div className={styles.hide}>
             <div style={{display:"flex",justifyContent:"space-between"}}>
               <p>Add New Address</p>
               <a style={{padding:"10px",cursor:"pointer",margin:"0px"}} onClick={closeAddAddressOption}>Close</a>
             </div>
             <form>
                <label htmlFor="street">STREET AND NUMBER</label><br />
                <input type="text" placeholder='STREET AND NUMBER' id='street'/><br />
                <label htmlFor="additional">ADDITIONAL INFO</label><br />
                <input type="text" placeholder='ADDITIONAL INFO' id='additional'/><br />
                <label htmlFor="city">CITY</label>
                <label htmlFor="postal">POSTAL CODE</label><br />
                <input type="text" placeholder='CITY' id='city'/>
                <input type="text" placeholder='POSTAL CODE' id='postal'/>
                <button type='submit'>Save Address</button>
             </form>
           
          </div>

          <div className={styles.hide}>
            <div className={styles.rewardsFlex}>    
            <div>
                <h1>Your Points</h1>
                <p>Collect points on each order and redeem it on <br /> your next order.</p>
                <p style={{border:"1px solid black",display:"inline-block",padding:"5px",borderRadius:"5px"}}>100 coins are worth € 10 Euro</p>
            </div>
            <div style={{width:"250px",height:"230px",textAlign:"center",padding:"10px",borderRadius:"10px",backgroundColor:"#E0EBEC ",marginLeft:"40px"}}>
                <p>YOUR POINTS</p>
                <h1>0.00</h1>
                <p>POINTS</p>
                <button>Redeem Now</button>
            </div>
            </div>
             <div style={{textAlign:"center",paddingTop:"30px"}}>

                <p style={{fontWeight:"bold",fontSize:"30px"}}>Your transactions</p>
                <p>Following is the list of all points of activity. The amount represented is in points units.</p>
             </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default dashboard