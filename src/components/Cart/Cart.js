import React from 'react'
import { useCart } from "react-use-cart";

function Cart() {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        totalItems
      } = useCart();
    
      if (isEmpty) return <p>Your cart is empty</p>;
    
      return (
        <>
          <h1>Cart: {totalItems} </h1>
    
          <ul className='list p10'>
            {items.map((item) => (
              <li key={item.id}>
                {item.quantity} x {item.title} &mdash;
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
        </>
      );
    }
    
  export default Cart;