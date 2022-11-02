import React from 'react'
import Image from 'next/image'
import styles from "./Navbar.module.css"
import Link from 'next/link'

function Navbar() {
  function changeTheColor(e:any){
       console.log(e.target.classList);
      //  e.target.classList.add('Navbar_changeColor__yaTrp');
  }
  return (
    <nav className={styles.navbar}>
        <div className="logo">
          <Image src="/titleicon.jpg" width={50} height={50}></Image>
        </div>
        <div className={styles.navItems}>
          <li><Link href="/"><a onClick={(e)=>changeTheColor(e)}> Home</a></Link></li>
          <li><Link href="/menu"><a onClick={(e)=>changeTheColor(e)}>Menu</a></Link></li>
          <li><Link href="/reservation"><a onClick={(e)=>changeTheColor(e)}>Reservation</a></Link></li>
          <li><Link href="/gallery"><a onClick={(e)=>changeTheColor(e)}>Gallery</a></Link></li>
          <li><Link href="/contact"><a onClick={(e)=>changeTheColor(e)}>Contact</a></Link></li>
          <li><Link href="/login"><a onClick={(e)=>changeTheColor(e)}>Login</a></Link></li>
          <li><Link href="/dashboard"><a onClick={(e)=>changeTheColor(e)}>Dashboard</a></Link></li>

        </div>
      </nav>
  )
}

export default Navbar