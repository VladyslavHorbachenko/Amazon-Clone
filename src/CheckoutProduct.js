import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,title,price,image,rating}){

     const [{basket},dispatch] = useStateValue()

    const removeFromBasket = () => {
        //remove item from cart
        dispatch({
            type:"REMOVER_FROM_BASKET",
            id: id
        })
    }
    return(
        <div className="checkoutProduct">
            <img  className="checkoutProductImage" src=""src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}
export default CheckoutProduct