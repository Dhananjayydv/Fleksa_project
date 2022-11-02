import React, {useRef,useState,useEffect} from 'react'
import Navbar from '../components/Navbar';
import styles from "../components/Menu.module.css"
import { arrayBuffer } from 'stream/consumers';
import Link from 'next/link';



function menu() {
 
const itemDOM = useRef<HTMLInputElement>(null);
const productRef = useRef<HTMLInputElement>(null);
const categoryRef = useRef<HTMLInputElement>(null);
const categoryHeadingRef = useRef<HTMLInputElement>(null);
    
  const [categoriesArray, setcategoriesArray] = useState([]);  
  const [loaded,setloaded]=useState(false);
  const [textInput,settextInput]=useState("");
  const [path,setpath]=useState("");
  const [currentTitle,setcurrentTitle]=useState("");
  const [style,setStyle]= useState("brightView");
  const [clicked,setClicked]=useState("false");
  const [storageflag,setStorageflag]=useState(null);
  const [qty,setQty]=useState(1);
  let totalCartValue:any = 0;
  // const [newcartItem,setNewCartItem]=useState([]);
// export class Homepage extends Component {
    // constructor(){
    //   super();
    //   this.itemDOM = React.createRef();
    //   this.productRef = React.createRef();
    //   this.categoryRef = React.createRef();
    //   this.categoryHeadingRef = React.createRef();
    //   this.state = {
    //     categoriesArray:[],
    //     loaded:false,
    //     textInput:"",
    //     path:"",
    //     currentTitle:""
    //   };
    // }

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
            console.log(item.itemQuantity);
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
    
   useEffect(()=>{
        fetch("https://myqa.fleksa.com/pyapi/26/menu")
        .then(response=>response.json())
        .then(data=>{
            // this.setState({
            //     categoriesArray : data.categories,
            //     loaded:true
            // })
            setcategoriesArray(data.categories);
            setloaded(true);
        })   

      const loadSaved = async () => {
        let storedArray:any = localStorage.getItem("cart");
          setStorageflag(JSON.parse(storedArray));
          // setPassword(localStorage.getItem("Password"));
      }
        loadSaved();
      
    },[])

    function changeClickedStatus(e:any,element:any){
      // setClicked("true");
      // console.log(categoryRef.current?.children);
      // Array.from(categoryRef.current.children:,(Element:any)=>{
      //    console.log(Element);
      // })
    //   for (var i = 0, m = categoryRef.current?.children; i < m.length; i++) {
    //     // let element = elements[i];
    //     console.log(categoryRef.current?.children[i]);
    // }

    var list: any = categoryRef.current?.children;
    for (let item of list) {
        item.classList.remove('Menu_darkView__kXwdL');
        item.classList.add('Menu_brightView__SbTXR')
    }
      // for(let i=0;i<categoryRef.current?.children.length;)
      e.target.classList!==""?e.target.classList.remove('Menu_brightView__SbTXR'):console.log(e.target.classList);
      console.log(e.target.classList);
      e.target.classList.add('Menu_darkView__kXwdL');
      window.location.replace(`#${element.name_json.english.split(' ')[0]}`);
    }

    // function changeStyle(){

    //   setStyle("darkView");
    // }
    function onInputChange(e:any){
    //   this.setState({
    //     textInput:e.target.value
    //   })
     settextInput(e.target.value);
     let list1:any = itemDOM.current?.children;
       for(let item of list1){
        let count=0;
        // console.log(item.children.length);
        let n1 = item.children.length;

        
        for(let j=0;j<n1;j++){
          console.log(item.children[j]);
          

             if(j>0 && item.children[j].firstChild.firstChild.innerHTML.toUpperCase().indexOf(e.target.value.toUpperCase())<0){
              console.log(item.children[j].firstChild.firstChild.innerHTML.toUpperCase())
              item.children[j].style.display="none";
              count++;
             console.log(item.children[j]);
           }
           else{
            item.children[j].style.margin="40px";
            item.children[j].style.display="flex";
            item.children[j].style.justifyContent="center";
            item.children[j].style.alignItems="center";
               
           }
           if(count==n1-1){
            item.children[0].style.display="none";

           }
        }
       }
       
    }

    function handleScroll(event:any){
      // console.log(window.location)
    //   var node = event.target;
    // const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
    // if (bottom) {      
    //   console.log("BOTTOM REACHED:",bottom); 
    // } 
    console.log("heading has been scrolled")
    }
    // let cartItem =[];
    let cartItem:any=[];
    let storedcartItem:any=[];
    
    function addToCart(e:any){
      cartItem.push({
        itemName:e.target.parentNode.parentNode.children[0].children[0].innerText,
        itemPrice:e.target.parentNode.parentNode.children[0].children[2].innerText,
        itemQuantity:1
      })
      // localStorage.setItem("cart",JSON.stringify(cartItem));
      if(localStorage.getItem("cart")){
        let storedArray:any = localStorage.getItem("cart");
        storedcartItem = JSON.parse(storedArray);
        // setStorageflag(true);
      }
      let flag = false;
      // let storedcartItemArray = Array.from(storedcartItem);
      for(let item of cartItem){
        for(let element of storedcartItem){
            if(item.itemName===element.itemName){
              element.itemQuantity +=1;
              flag=true;
            }
        }
        if(flag==false){
          storedcartItem.push(item);
        }
        
        // console.log(item);
        console.log(storedcartItem);
      }
      localStorage.setItem("cart",JSON.stringify(storedcartItem));
      setStorageflag(storedcartItem);
      // console.log(storedcartItemArray);
      cartItem = [];
      storedcartItem = [];
    }

    // function addToCart(e:any){
    //   // console.log(e.target.parentNode.parentNode.children[0].children[2].innerText)
    //   // localStorage.setItem("")
    //   // cartItem.push({
    //   //   itemName:e.target.parentNode.parentNode.children[0].children[0].innerText,
    //   //   itemPrice:e.target.parentNode.parentNode.children[0].children[2].innerText
    //   // })
    //   // localStorage.setItem("cart",JSON.stringify({
    //   //   itemName:e.target.parentNode.parentNode.children[0].children[0].innerText,
    //   //   itemPrice:e.target.parentNode.parentNode.children[0].children[2].innerText,
    //   // }))
    //   // cartItem = localStorage.getItem("cart");
    //   // console.log(cartItem);
    //   if(localStorage.getItem("cart")!==null){
    //     let storedArray:any = localStorage.getItem("cart");
    //     cartItem.push(JSON.parse(storedArray));
    //   }
    //   // if(cartItem.size()==2)
    //   console.log(cartItem.length);
    //   if(cartItem.length==0){
    //       cartItem.push({
    //           itemName:e.target.parentNode.parentNode.children[0].children[0].innerText,
    //           itemPrice:e.target.parentNode.parentNode.children[0].children[2].innerText
    //       })
    //   }
    //   else{
    //     cartItem[0].push({
    //       itemName:e.target.parentNode.parentNode.children[0].children[0].innerText,
    //       itemPrice:e.target.parentNode.parentNode.children[0].children[2].innerText
    //     })
    //   }
    //   // }
      
      
    //   // console.log(cartItem);
    //   // localStorage.setItem("cart",JSON.stringify({
    //   //     itemName:e.target.parentNode.parentNode.children[0].children[0].innerText,
    //   //     itemPrice:e.target.parentNode.parentNode.children[0].children[2].innerText
    //   //   },
    //   //   {
    //   //     itemName:"dhruv",
    //   //     itemPrice:e.target.parentNode.parentNode.children[0].children[2].innerText
    //   //   }))
    //   // if(cartItem.length==0){
    //     localStorage.setItem("cart",JSON.stringify([cartItem[0]]));
    //   // }

    //   console.log(cartItem);
    //   cartItem =[];
    // }
    
    // searchCategoryItem(e){
    //   const n = this.categoryRef.current.children.length;
    //   for(let i=0;i<n;i++){
    //   this.categoryRef.current.children[i].style.backgroundColor="white";
    //   this.categoryRef.current.children[i].style.color= "black";
        
    //   }
    //   e.target.style.backgroundColor="black";
    //   e.target.style.color="white";
    // }


//   render(){
    return(
    <>
    <Navbar/>
        {/* <link rel="stylesheet" href="/homepage.css" /> */}
       {/* <nav>
        <div className="logo"><a href="#"><img src="logo192.png" alt="" /></a> </div>
        <ul className="navMenu">
            <li className="homeNav"><a href="#">Home</a> </li>
            <li className="menuNav"><a href="#">Menu</a></li>
            <li className="reservationNav"><a href="#">Reservation</a></li>
            <li className="contactNav"><a href="#">Contact</a> </li>
            <li className="LoginNav"><a href="#">Login</a> </li>
        </ul>
       </nav> */}
       
       <div className={styles.carousel}>
        <div className={styles.innerCarousel}>
          <div className={styles.leftInnerCarousel}>
          <h1 style={{margin:"0",padding:"0"}}>Smart Pizza Rodgau</h1>
          <h4 style={{margin:"0",padding:"0"}}>Italian style pizza, Burger, 100% Halal</h4> 
          </div>
          <div className={styles.rightInnerCarousel}>
            <h4 style={{margin:"0",padding:"0"}}>OFFER</h4>
            <ul className={styles.offerList}>
                <li>TEST190 Discount of 5 € on orders above 10 € <br /> Test offer for all users for limited period for only admin</li>
                <li>PIZZA50 Discount of 50% on orders above 0 € <br /> 50 % off on everything</li>
            </ul>
          </div>
        </div>
      </div>


      <section className={styles.mainContent}>

        <div className={styles.itemCategory}>
        <div style={{display:"flex",justifyContent:"flex-end"}}>
         <input type="text" className={styles.searchItem} value={textInput} placeholder='Search Here'  onChange={(e)=>onInputChange(e)}/></div>
          <div className={styles.category} ref={categoryRef}>
            {categoriesArray.map((element:any)=>{
              {/* let path={element.name_json.english} */}
                return <>
                
                <button className={element.name_json.english=="Ben & Jerry's"?styles.darkView:styles.brightView}
                onClick={(e)=>{changeClickedStatus(e,element)}}
                // onClick={(e)=>{const n:number|undefined= categoryRef.current?.children.length;
                //               //  for(let i=0;i<n;i++){
                //               //       categoryRef.current?.children[i].style.backgroundColor="white";
                //               //       categoryRef.current?.children[i].style.color= "black";        
                //               //   }
                //               //    e.target.style.backgroundColor="black";
                //               //    e.target.style.color="white";
                //                  window.location.replace(`/#${element.name_json.english.split(' ')[0]}`);}} 
                style={{fontWeight:"bold"}}>{element.name_json.english} </button>  
                </>
            })}
          </div>
        </div>

              
        <div className={styles.itemMenu} ref={itemDOM}>
            {categoriesArray.map((element:any)=>{
              
             return <> <div className={styles.itemOuterDiv}>
              <h1 style={{textAlign:"center",margin:20}} id={element.name_json.english.split(" ")[0]}  onScroll={(e)=>handleScroll(e)} ref={categoryHeadingRef} >{element.name_json.english}</h1>
              {element.products.map((product:any)=>{
                return <div className={styles.item} ref={productRef}>
                <div className={styles.leftItem}>
                <p className={styles.itemName}>{product.name_json.english}</p>
                <p className={styles.itemDesc}>{product.description_json.english}</p>
                <p className={styles.itemPrice}>{product.price}</p>
                </div>
                <div className={styles.rightItem}>
                <button className={styles.add} onClick={(e)=>{addToCart(e)}}>ADD</button>
                </div>
              </div> 
              })}
              </div>
              </>

              
            })}
             
        </div>
        <div className={styles.cart}>
            <h1>Your Cart</h1>
            <hr />
           {storageflag?
                ( <div> 
                  
                  <>
                  {storageflag.map((cartItem:any)=>{
                      // totalCartValue +=parseFloat(cartItem.itemPrice);
                      // setQty(cartItem.itemQuantity);
                      let n1= parseInt(cartItem.itemQuantity);
                      let n2 = parseFloat(cartItem.itemPrice);
                      let itemTotalCartValue:number = n1*n2;
                      totalCartValue +=itemTotalCartValue;
                      console.log(itemTotalCartValue);
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
                   </>
                   <div style={{display:"flex",justifyContent:"space-between"}}>
                   <h4>Total</h4>
                   <h4>{totalCartValue.toFixed(2)}€</h4>
                   </div>
                   <Link href="/checkout"><a><button  style={{width:"100%",padding:"10px",backgroundColor:"black",color:"white",cursor:"pointer"}}>Checkout</button></a></Link>
                  </div>):(
                  <div>
                <div className={styles.cartBgImg}>
                <img src="emptyCart.png" alt="" />
                </div>
                <p className={styles.cartP1}>Please Select atleast one Product to place an order</p>
                <p className={styles.cartP2}>The restaurant is not accepting any orders at the moment.</p>
                </div>
                )
           }
           
        </div>
      </section>

    </>
    )
  }
// }




// export default Homepage


export default menu
