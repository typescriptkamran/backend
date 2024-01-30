'use client'
import { ShoppingCart, Bell } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useCart } from './CartContext';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


function NavBar() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, getTotal } = useCart();


  // Calculate the total quantity of items in the cart
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='flex bg-slate-900 py-1 px-2 items-center justify-between text-white'>
      <Link href="{}">
        <p>Gifts Bouquets</p>
      </Link>
      <div className='flex items-center gap-5'>
        <div className='flex gap-1'>
        <Popover>
  <PopoverTrigger className='flex'><ShoppingCart />
          <span className='bg-green-500 rounded-full absolute px-2 mt-[-10px] ml-3'>{totalItemsInCart}</span>
        </PopoverTrigger>
  <PopoverContent><h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
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
      )}</PopoverContent>
</Popover>

          </div>
        <div className='flex gap-1'>
          <Bell />
          <span className='bg-red-500 rounded-full absolute px-2 mt-[-10px] ml-3'>5</span>
        </div>
        <Avatarimg />
      </div>
    </div>
  );
}

export default NavBar;

export function Avatarimg() {
  return (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' height={36} width={36} alt='@shadcn' className='border-2 border-white rounded-full' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
