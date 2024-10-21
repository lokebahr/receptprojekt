import React from "react";
import { useOutletContext } from 'react-router-dom';

function ShoppingCart() {
    const {cart, setCart} = useOutletContext(); 

    const deleteIngredient = (ingredient) => {
        const updatedCart = cart.filter(cartItem => cartItem.id !== ingredient.id);
        setCart(updatedCart);
      };
    return(
        <div>
            <h4>Here is your shopping cart!</h4>
            <ul>
            {cart.length > 0 ? (
                cart.map((ingredient) => (
                    <li>
                        {ingredient.name}: {ingredient.amount} {ingredient.unit}    
                        <button onClick={()=>{deleteIngredient(ingredient)}}>➖</button>
                         
                    </li>
                    
          ))
        ) : (
          <p>No ingredients added</p> 
        )}
            </ul>
        </div>
    );
}

export default ShoppingCart;
//<button onClick={deleteIngredient(ingredient)}></button>
