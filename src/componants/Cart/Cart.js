import React from 'react';
import CartCSS from './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.price , 0)
    return (
        <div className='cart'>
            
                <h1>Order Summary</h1>
                <h2>Course Ordered: {cart.length}</h2>
                <h3>Total Price: {total}</h3>
        
        </div>
    );
};

export default Cart;