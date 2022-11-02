import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
function OrderSuccessful() {
    // const [storageflag,setStorageflag]=useState(null);
    // let totalCartValue:any = 0;
    // let a:any=[];


    useEffect(()=>{
        const loadSaved = async () => {
            // let storedArray:any = localStorage.getItem("cart");
            //   setStorageflag(JSON.parse(storedArray));
            localStorage.removeItem("cart");
              // setPassword(localStorage.getItem("Password"));
          }
            loadSaved();
    },[])
  return (
    // <div>orderSuccessful</div>
    <>
    <Navbar/>
    <div className="container" style={{width:"600px",borderRadius:"20px",margin:"80px auto",textAlign:"center"}}>
        <h1>Thank You for Using the Service!</h1>
        <h2>Your order has been placed successfully</h2>
    </div>
    </>

  )
}

export default OrderSuccessful