import React, { Component } from 'react'




export class Homepage extends Component {
    constructor(){
      super();
      this.itemDOM = React.createRef();
      this.productRef = React.createRef();
      this.categoryRef = React.createRef();
      this.categoryHeadingRef = React.createRef();
      this.state = {
        categoriesArray:[],
        loaded:false,
        textInput:"",
        path:"",
        currentTitle:""
      };
    }
    
    componentDidMount(){
        fetch("https://myqa.fleksa.com/pyapi/26/menu")
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                categoriesArray : data.categories,
                loaded:true
            })
        })
        
    }

    onInputChange(e){
      this.setState({
        textInput:e.target.value
      })
     let n = this.itemDOM.current.children.length;
       for(let i=0;i<n;i++){
        let n1 = this.itemDOM.current.children[i].children.length;
        let count=0;
        
        for(let j=0;j<n1;j++){
             if(j>0 && this.itemDOM.current.children[i].children[j].firstChild.firstChild.innerHTML.toUpperCase().indexOf(e.target.value.toUpperCase())<0){
              console.log(this.itemDOM.current.children[i].children[j].firstChild.firstChild.innerHTML.toUpperCase())
              this.itemDOM.current.children[i].children[j].style.display="none";
              count++;
             console.log(this.itemDOM.current.children[i].children[j]);
           }
           else{
            this.itemDOM.current.children[i].children[j].style.margin="40px";
            this.itemDOM.current.children[i].children[j].style.display="flex";
            this.itemDOM.current.children[i].children[j].style.justifyContent="center";
            this.itemDOM.current.children[i].children[j].style.alignItems="center";
               
           }
           if(count==n1-1){
            this.itemDOM.current.children[i].children[0].style.display="none";

           }
        }
       }
       
    }
    
    // searchCategoryItem(e){
    //   const n = this.categoryRef.current.children.length;
    //   for(let i=0;i<n;i++){
    //   this.categoryRef.current.children[i].style.backgroundColor="white";
    //   this.categoryRef.current.children[i].style.color= "black";
        
    //   }
    //   e.target.style.backgroundColor="black";
    //   e.target.style.color="white";
    // }


  render(){
    return (
    <>
        <link rel="stylesheet" href="/homepage.css" />
       <nav>
        <div className="logo"><a href="#"><img src="logo192.png" alt="" /></a> </div>
        <ul className="navMenu">
            <li className="homeNav"><a href="#">Home</a> </li>
            <li className="menuNav"><a href="#">Menu</a></li>
            <li className="reservationNav"><a href="#">Reservation</a></li>
            <li className="contactNav"><a href="#">Contact</a> </li>
            <li className="LoginNav"><a href="#">Login</a> </li>
        </ul>
       </nav>

       <div className="carousel">
        <div className="innerCarousel">
          <div className="leftInnerCarousel">
          <h1>Smart Pizza Rodgau</h1>
          <h4>Italian style pizza, Burger, 100% Halal</h4> 
          </div>
          <div className="rightInnerCarousel">
            <h4>OFFER</h4>
            <ul className="offerList">
                <li>TEST190 Discount of 5 € on orders above 10 € <br /> Test offer for all users for limited period for only admin</li>
                <li>PIZZA50 Discount of 50% on orders above 0 € <br /> 50 % off on everything</li>
            </ul>
          </div>
        </div>
      </div>


      <section className='mainContent'>

        <div className="itemCategory">
         <input type="text" className="searchItem" value={this.state.textInput} placeholder='Search Here'  onChange={(e)=>this.onInputChange(e)}/>
          <div className="category" ref={this.categoryRef}>
            {this.state.categoriesArray.map((element)=>{
              {/* let path={element.name_json.english} */}
                return <>
                
                <button className='categoryName'  
                onClick={(e)=>{const n = this.categoryRef.current.children.length;
                               for(let i=0;i<n;i++){
                                    this.categoryRef.current.children[i].style.backgroundColor="white";
                                    this.categoryRef.current.children[i].style.color= "black";        
                                }
                                 e.target.style.backgroundColor="black";
                                 e.target.style.color="white";
                                 window.location.replace(`/#${element.name_json.english.split(' ')[0]}`);}} 
                style={{fontWeight:"bold"}}>{element.name_json.english} </button>  
                </>
            })}
          </div>
        </div>

              
        <div className="itemMenu" ref={this.itemDOM}>
            {this.state.categoriesArray.map((element)=>{
              
             return <> <div className='itemOuterDiv'>
              <h1 style={{textAlign:"center",margin:20}} id={element.name_json.english.split(" ")[0]} ref={this.categoryHeadingRef} >{element.name_json.english}</h1>
              {element.products.map((product)=>{
                return <div className="item" ref={this.productRef}>
                <div className="leftItem">
                <p className="itemName">{product.name_json.english}</p>
                <p className="itemDesc">{product.description_json.english}</p>
                <p className='itemPrice'>{product.price}</p>
                </div>
                <div className="rightItem">
                <button className="add">ADD</button>
                </div>
              </div> 
              })}
              </div>
              </>

              
            })}
             
        </div>
        <div className="cart">
            <h1>Your Cart</h1>
            <hr />
            <div className="cartBgImg">
              <img src="emptyCart.png" alt="" srcset="" />
            </div>
            <p className='cartP1'>Please Select atleast one Product to place an order</p>
            <p className='cartP2'>The restaurant is not accepting any orders at the moment.</p>
        </div>
      </section>

    </>
    )
  }
}

export default Homepage