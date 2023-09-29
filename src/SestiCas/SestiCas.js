import React, { useState } from "react";
Function SestiCas(){
    const [randomNumber, setRandomNumber] = useState(12);
    
    const [products, setProducts] = useState([
    {name: "adidas", price: 120, inCart: false},  
    {name: "adidas", price: 120, inCart: false} , 
    {name: "adidas", price: 120, inCart: false},
    {name: "adidas", price: 120, inCart: false},   
    ]);
    const inCartProducts = products.filter((products)=> products.inCart);
    return(
        <div style={{textAlign: "center"}}>
            {inCartProducts.length > 0 ?(
                <Products ime = {products.name} cena= {products.price}/>
                        ))
                        ) : (<h1>Nemate proizvode u korpi</h1>
                        )}
                        </div>
        {/* <div>
            10
        <h1>ovaj broj je paran</h1>
        </div>
        </div> */}
    )
}
export default SestiCas;