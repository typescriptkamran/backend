'use client'
import React from 'react';
import { useCart } from './CartContext';

const CartSidebar = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, getTotal } = useCart();

  return (
    <div className="fixed right-0  h-full w-72 bg-white p-4 shadow-lg overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="border-b pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-2">
                      {item.name} - ${item.price} x {item.quantity}
                    </div>
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-blue-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-blue-500 text-white rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      -
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold mt-4">Total: ${getTotal()}</p>
          <div className="flex justify-end mt-4">
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={() => alert('Implement checkout functionality')}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
