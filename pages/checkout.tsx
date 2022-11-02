import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "../components/Checkout.module.css"
import Footer from '../components/Footer'
import Link from 'next/link'
function Checkout() {
    const [storageflag,setStorageflag]=useState(null);
    let totalCartValue:any = 0;


    useEffect(()=>{
        const loadSaved = async () => {
            let storedArray:any = localStorage.getItem("cart");
              setStorageflag(JSON.parse(storedArray));
              // setPassword(localStorage.getItem("Password"));
          }
            loadSaved();
    },[])

    function increaseQty(e:any){
        let a:any =[]
       //  setQty(qty + 1);
         // setQty(e.target.parentNode.parentNode.parentNode.children[2].innerText + 1);
        let storedArray:any = localStorage.getItem("cart");
         a = JSON.parse(storedArray);
         a.map((item:any)=>{
           // console.log(item);
           if(item.itemName==e.target.parentNode.parentNode.parentNode.children[0].innerText){
             // item.itemQuantity = qty;
             item.itemQuantity +=1;
             
             // console.log(item.itemQuantity);
             e.target.parentNode.parentNode.children[1].children.innerText=item.itemQuantity;
             // setQty(item.itemQuantity+1);
            //  console.log(item.itemQuantity);
             window.location.reload();
 
           }
         })
         localStorage.setItem("cart",JSON.stringify(a));
    }
    function decreaseQty(e:any){
       let a:any =[]
       let b:any =[]
       let c:number = -1;
        
        let storedArray:any = localStorage.getItem("cart");
         a = JSON.parse(storedArray);

         a.map((item:any)=>{
            c +=1;
           if(item.itemName==e.target.parentNode.parentNode.parentNode.children[0].innerText){
             
             if(item.itemQuantity >=1){
               item.itemQuantity -=1;
               
               e.target.parentNode.parentNode.children[1].children.innerText=item.itemQuantity;
             }
             if(item.itemQuantity==0){
                  a.splice(c,1);
                  c -=1;
             }
             window.location.reload();
             
           }
         })
         localStorage.setItem("cart",JSON.stringify(a));
         // console.log(e.target.parentNode.parentNode.parentNode.children[0].innerText)
         
    }
    
  return (
    // <div>checkout</div>
    <>
     <Navbar/> 

     <div className="container" style={{display:"flex"}}>
        <div className="rightContainer" style={{width:"60%"}}>
               <div className="personalDetail" style={{backgroundColor:"#EDEEEE",width:"80%",marginLeft:'auto',marginRight:"10px",marginTop:"10px",padding:"10px",borderRadius:"10px"}}>
                  <h3>Personal Details</h3>
                  <div className="username" style={{display:"flex",justifyContent:"space-between"}}>
                    <p className='usernameValue'>User</p>
                    <div>
                        <button style={{backgroundColor:"black",color:'white',border:"none",borderRadius:"10px",padding:"5px"}}>Edit</button>
                    </div>
                  </div>
                  <div className="email" style={{display:"flex",justifyContent:"space-between"}}>
                    <p className="emailValue">Email</p>
                    <div>
                        <button style={{backgroundColor:"black",color:'white',border:"none",borderRadius:"10px",padding:"5px"}}>Edit</button>
                    </div>
                  </div>
                  <div className="number" style={{display:"flex",justifyContent:"space-between"}}>
                    <p className="numberValue">Number</p>
                    <div>
                        <button style={{backgroundColor:"black",color:'white',border:"none",borderRadius:"10px",padding:"5px"}}>Edit</button>
                    </div>
                  </div>
               </div>
               <div className="deliveryModeDetails" style={{width:"80%",marginLeft:'auto',backgroundColor:"#EDEEEE",marginRight:"10px",marginTop:"10px",padding:"10px",borderRadius:"10px"}}>
                <div className="deliveryMode" style={{display:"flex",justifyContent:"space-between"}}>
                    <p className="deliveryModeValue" style={{fontWeight:"bold"}}>Pickup</p>
                    <div>
                        <button style={{backgroundColor:"black",color:'white',border:"none",borderRadius:"10px",padding:"5px"}}>Edit</button>
                    </div>
                </div>
               </div>
               <div className="commentBox" style={{width:"80%",marginLeft:'auto',backgroundColor:"#EDEEEE",marginRight:"10px",marginTop:"10px",padding:"10px",display:"flex",justifyContent:"space-between",borderRadius:"10px"}}>
                  <p className="commentValue" style={{fontWeight:"bold"}}>Comments</p>
                  <div>
                        <button style={{backgroundColor:"black",color:'white',border:"none",borderRadius:"10px",padding:"5px"}}>Edit</button>
                    </div>
               </div>
               <div className="pointsBox" style={{width:"80%",marginLeft:'auto',backgroundColor:"#EDEEEE",marginRight:"10px",marginTop:"10px",padding:"10px",borderRadius:"10px"}}>
                <p className="pointsHeading" style={{fontWeight:"bold"}}>Points</p>
                <p className="pointsComment">You have 0.00 points ready to use.</p>
               </div>
               <div className="paymentMode" style={{width:"80%",marginLeft:'auto',backgroundColor:"#EDEEEE",marginRight:"10px",marginTop:"10px",padding:"10px",borderRadius:"10px"}}>
                  <div className="heading" style={{fontWeight:"bold"}}>PAYMENT(Visa)</div>
                  <div className="paymentMethod" style={{display:"flex",justifyContent:"space-between"}}>
                    <p>Visa</p>
                    <div>
                        <button style={{backgroundColor:"black",color:'white',border:"none",borderRadius:"10px",padding:"5px"}}>Edit</button>
                    </div>
                  </div>
               </div>
               <div className="buttonAndCheck" style={{display:"flex",justifyContent:"flex-end",flexDirection:"column",borderRadius:"10px"}}>
                    {/* <div  > */}
                       <Link href="/OrderSuccessful"><button style={{width:"80%",marginLeft:'auto',marginRight:"10px",marginTop:"10px",padding:"10px",backgroundColor:"yellow",color:"black",fontWeight:"bold",fontSize:"25px",borderRadius:"20px",border:"none",cursor:"pointer"}}>ORDER AND PAY</button></Link>

                    {/* </div> */}
                    <p style={{width:"80%",marginLeft:'auto',textAlign:"center",marginRight:"10px",marginTop:"10px",padding:"10px"}}>By clicking on ORDER AND PAY you agree with the contents of the shopping cart, the data you filled out, our Privacy Policy and Terms of Use</p>
               </div>
        </div>
        <div className="leftContainer" style={{backgroundColor:"#EDEEEE",padding:"10px",marginTop:"10px",borderRadius:"10px",width:"36%"}}>
        <h3>Cart</h3>
        {storageflag && storageflag.map((cartItem:any)=>{
                      // totalCartValue +=parseFloat(cartItem.itemPrice);
                      // setQty(cartItem.itemQuantity);
                      let n1= parseInt(cartItem.itemQuantity);
                      let n2 = parseFloat(cartItem.itemPrice);
                      let itemTotalCartValue:number = n1*n2;
                      totalCartValue +=itemTotalCartValue;
                    //   console.log(itemTotalCartValue);

                      return (<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      
                      <p style={{width:"40%"}}>{cartItem.itemName}</p>
                      <div style={{display:"flex",justifyContent:"space-between",width:"10%",alignItems:"center"}}>
                        <div style={{padding:"5px"}}>
                          <button onClick={(e)=>decreaseQty(e)} style={{backgroundColor:"black",color:"white",cursor:"pointer"}}>-</button>
                        </div>
                        <div style={{padding:"5px"}}>
                          <p>{cartItem.itemQuantity}</p>
                        </div>
                        <div style={{padding:"5px"}}>
                          <button onClick={(e)=>increaseQty(e)} style={{backgroundColor:"black",color:"white",cursor:"pointer"}}>+</button>
                        </div>
                      </div>
                      <p>{itemTotalCartValue.toFixed(2)} €</p>
                      </div>)
                    //  return <p>itemName</p>
                  })}
                  <hr />
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                   <h4>Total</h4>
                   <h4>{totalCartValue.toFixed(2)} €</h4>
                   </div>
        </div>
     </div>

     <Footer/>
    </>
  )
}

export default Checkout