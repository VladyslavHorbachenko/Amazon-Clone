import React from 'react';
import {useStateValue} from "./StateProvider";
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from "./Subtotal";


function Checkout(){

    const [{ basket }] = useStateValue()

    return(
        <div className="checkout">
            <div className="checkout__left">
            <img
                className="checkout_ad"
                 src="https://m.media-amazon.com/images/S/abs-image-upload-na/c/AmazonStores/ATVPDKIKX0DER/46ce39b478a48bc311d9ebcceaab26f2.w1500.h400._CR0%2C0%2C1500%2C400_SX1500_.jpg"
                 alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping cart is empty</h2>
                    <p>You have no items in your basket</p>
                </div>
            ): (
                <div>
                    <h2 className = "checkout__title">Your Shopping Cart </h2>
                    {/*List*/}
                    {basket?.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (basket) && (
                <div className="checkout__right">
                  <Subtotal/>
                </div>
            )}
        </div>
    )
}
export default Checkout;