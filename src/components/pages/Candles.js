import React, {useState, useEffect} from "react";
import "../pages/Candles.css";
import {useParams} from "react-router-dom";





function Candles () {

    const {id_num} =useParams()
    const[candles, setCandles] = useState({})

    useEffect(()=>{
     fetch(`http://127.0.0.1:5000/candles/${id_num}`)
        .then(response => response.json())
        .then(response =>{
            setCandles( response)
        }).catch( error =>{
            console.log("error", error)
        })
    }, [id_num]) 

    return(
        
       <div className="product-wrapper"> 
        <h2 className="heading2">About The Product</h2>


        {candles? (
           Object.keys(candles).length === 0 ?
           <>candles is empty</>:
           ( <>
           <img className="candle-img" src="https://m.media-amazon.com/images/I/31YUzhOR3qL._AC_.jpg" alt="Candle"/> 
           <div className="img-info">candle_color: {candles["candle_color"]}</div>
           <div>candle_name: {candles["candle_name"]}</div>
           <div>price: {candles["price"]}</div>
           <div>quantity: {candles["quantity"]}</div>
           </>)
        ): <>Candles Not Defined</>}
       </div> 
       
    )
}

export default Candles;