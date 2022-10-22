import React, {useState, useEffect} from "react";
import "../pages/About.css";
import {Link} from "react-router-dom";

function About () {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/candles/')
        .then(response => response.json())
        .then(response =>{
            setProduct( response["product"])
        }).catch( error =>{
            console.log("error", error)
        })
      setProduct([{id_num: 1, candle_color: "White ", candle_name: "Calming Candle"}])
    }, [])


    return(
       <div className="info-container">
       
        <h4>EVERYTHING YOU NEED, ALL IN ONE PLACE.</h4>
         <h5><i>For all your candle making equipment!</i></h5> 
         
        <div className="product-wrapper">
            <ol>
                {!product ?
                   <>Variable Not Defined</>:
                 (product.length === 0 ?
                   <>Variable Not Defined</>:
                     product.map(candles =>(
                        <li key={candles["id_num"]}>
                            <Link className="text-link" to={`/candles/${candles["id_num"]}`}>{candles["candle_color"]}{candles["candle_name"]}</Link></li>
                     )) )
                }
            </ol>
          

        <div>
        <p className="text1">Allow candles to bring a peaceful ambiance into a space.
           Try using candles to enhance specific moments like dinners, 
           bathtime, meditation, prayer, or while reading or watching 
           your favourite TV show/movie at home; sundowners or braais 
           in your garden/balcony/patio…you can begin and end the day
            on a good note.  Go on and spoil yourself! Enjoy a little 
            light indulgence! </p>
        </div> 

        </div>
       </div> 
    )
}

export default About;