import React from 'react'
import "./Payment.css"

function Payment() {
    return (
        
        
        <>
         <div className="main__div">
       
         <div className="signup">
        
         <div>
             <h1 className="create__account"> 3. Enter your <span style={{color:"orange"}}> billing details </span></h1>
         </div>

         <div className="cards__pay">
             {/* <img src="" alt="razorpay"/> */}
             <h4>or pay with credit card</h4>
         </div>

         <div className="pass__word">
         
             <h3 className="pass">name on card</h3>
             <input className="input2" type="text" />
         </div>

         <div className="pass__word">
               <h3 className="pass">card number</h3>
               <input className="input2" type="number" />
         </div>
         <div className="card__details">
         <div className="card__details1">
             <h3 className="pass">expiration</h3>
             <input className="input3" type="number" placeholder="MM/YYYY"/>
             </div>
             <div className="card__details1">
             <h3 className="pass">security code</h3>
             <input className="input3" type="number" placeholder="CVV"/>
         </div>
         </div>
         <div className="pass__word">
         <h3 className="pass">BILLING ZIP/POSTAL CODE</h3>
             <input className="input2" type="number" />
         </div>
             
         <button className="btn1">complete checkout</button>

         </div>

         <div className="order__summary">
         <div className="order">
             <h1 className="order1">Order summary</h1>
         </div>
         <hr className="hr1"/>
            <div className="subscription">
                <h2 className="subscription1">Yearly subscription<span className="price"> $ 105.00 / year </span></h2>
            </div>
            <hr className="hr1"/>
            <div className="renewal">
                <h2 className="renewal1">AUTO RENEWAL</h2>
            </div>
            <div>
           <h3 className="renewal2">We will bill you yearly until you cancel.</h3>
            </div>
            <hr className="hr1"/>
            <div className="subscription">
                <h2 className="subscription1">sub total<span className="price1"> $ 105.00 </span></h2>
            </div>
            <div className="subscription">
                <h2 className="subscription1"> Tax <span className="price2"> 0.0 </span></h2>
            </div>
            <div className="subscription">
                <h2 className="subscription1">amount due<span className="price3"> $ 105.00 </span></h2>
            </div>
            <hr className="hr1"/>
         </div>
         
         </div>
       </>
    )
}
            
 

export default Payment
