import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import styles from '../components/Gallery.module.css'

function gallery() {
  return (
   <>
   <Navbar/>
   <div className={styles.carousel}>
    
       <h1 style={{margin:"0px",padding:"0px",color:"white",fontWeight:"500",fontSize:"40px"}}>GALLERY</h1>
      
   </div>
   <div className={styles.galleryImage}>
     <div>
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
     </div>
     <div>
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
     </div>
     <div>
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
     </div>
     <div>
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
       <img src="mobilebg.png" alt="" />
     </div>
   </div>
   </>
  )
}

export default gallery