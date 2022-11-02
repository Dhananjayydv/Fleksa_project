import React from 'react'
import styles from "../components/Footer.module.css"
import Link from 'next/link'
function Footer() {
  return (
    <footer className={styles.footer}>
       <div className={styles.footerAddress}>
          <p>Gelastraße 92 <br /> 60388 Frankfurt am Main <br /> hello@fleksa.com <br />+49 69120063308</p>
       </div>

       <div className={styles.footerAbout}>
           <h3>Online Ordering System</h3>
           <p>Powered By</p>
           <img src="fleksa-logo.svg" alt="" />
       </div>


       <div>
         <div className={styles.socialMediaLinks}>
           <Link href="/">Insta</Link>
           <Link href="/">Fb</Link>
           <Link href="/">Linkedin</Link>
           <Link href="/">Twitter</Link>
         </div>
         <p>©️2021 Fleksa | Terms & Conditions | Privacy Policy | Imprint</p>
       </div>
     </footer>
  )
}

export default Footer