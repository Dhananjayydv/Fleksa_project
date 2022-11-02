import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Good Taste | Frankfurt am Main</title>
        <meta name="description" content="Generated by create next app" />
        {/* <!-- CSS only --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"></link>
        {/* <!-- JavaScript Bundle with Popper --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" ></script>
        <link rel="icon" href="/titleicon.jpg" />
      </Head>

     <Navbar/>
      
      
     <div className={styles.carousel}>
        <div className={styles.carouselText}>
         <h1>Good Taste</h1>
         <h3>Food and Drink</h3>
         <div className={styles.carouselButton}>
          <Link href="/menu"><button>ORDER NOW</button></Link>
          <Link href="/reservation"><button>RESERVE NOW</button></Link>
         </div>
        </div>
     </div>

     <div className={styles.intro}>
      <div className={styles.introText}>
        <h2>Welcome to Fleksa Demo Restaurant Webshop11</h2>
        <p>Looking for a great way to enjoy your food? Good Taste is the perfect website for you! Our food ordering system makes it easy to order your favorite dishes and have them delivered right to your doorstep. Plus, we offer a wide variety of food options so you can always find something to your taste. Whether you're craving a delicious pizza or a hearty bowl of soup, Good Taste has you covered. So why not give us a try today? We guarantee you'll love our food! 11</p>
      </div>
      <div className={styles.introGallery}>
        <Link href="/gallery"><a><img src="/introGalleryImg.png"/></a></Link>
        {/* <h2>More <br /> Gallery</h2> */}
      </div>
     </div>

     <div className={styles.testimonial}>
      <h2>WHAT OUR CUSTOMERS SAY ABOUT US</h2>
       <div className={styles.testimonialCards}>
        <div className={styles.reviews}>
             <img src="review1.jpg" alt=""  />
             <h3>Fleksa</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis ratione sunt quod, quae eligendi soluta vitae inventore sequi officiis! Distinctio molestias </p>
        </div>
        <div className={styles.reviews}>
             <img src="review1.jpg" alt=""  />
             <h3>Fleksa</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis ratione sunt quod, quae eligendi soluta vitae inventore sequi officiis! Distinctio molestias </p>
        </div>
        <div className={styles.reviews}>
             <img src="review1.jpg" alt=""  />
             <h3>Fleksa</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis ratione sunt quod, quae eligendi soluta vitae inventore sequi officiis! Distinctio molestias </p>
        </div>
        <div className={styles.reviews}>
             <img src="review1.jpg" alt=""  />
             <h3>Fleksa</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis ratione sunt quod, quae eligendi soluta vitae inventore sequi officiis! Distinctio molestias </p>
        </div>
        <div className={styles.reviews}>
             <img src="review1.jpg" alt=""/>
             <h3>Fleksa</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis ratione sunt quod, quae eligendi soluta vitae inventore sequi officiis! Distinctio molestias </p>
        </div>
       </div>

       
       <div className={styles.appInfo}>
          <div className={styles.appInfoMobile}>
              <div>
                <Link href="/"><img src="titleicon.jpg" alt="" width={100} height={100} style={{borderRadius:"100px",marginTop:"50px",cursor:"pointer"}}/></Link>
                <h3 style={{color:"white"}}>Good <br /> Taste</h3>
                <p style={{color:"white"}}>Food and drink</p>
                <button>ORDER NOW</button>
                <Link href="/menu"><img src="navbarAppLink.png" alt="" className={styles.mobileNavbar}/></Link>
              </div>
          </div>
          <div className={styles.linkToApp}>
             <h3>Download the App</h3>
             <p>We want to make it easy and convenient for people like you to order from the comfort of your own home. What are you waiting for? It's time for us to connect. Download our app now from the Apple App Store or the Google Play Store.</p>
             <button style={{color:"white"}}>Download on the <br /> Apple store</button>
          </div>
       </div>

     </div>


     <Footer/>
     
    </div>
  )
}

export default Home
