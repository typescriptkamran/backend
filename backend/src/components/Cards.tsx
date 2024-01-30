'use client'
import React from 'react';
import ButtonMain from './ButtonMain';
import { Product } from '@/data/Categories';
import Link from 'next/link';
import Image from 'next/image';
import { CartProduct, useCart } from './CartContext';


const Cards = ({ products, category, subCategory }: { products: Product[]; category: string; subCategory: string }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (products: CartProduct) => {
    addToCart(products);
    // console.log(product);
    // You can add any additional logic here, e.g., show a notification
  };

  return (
    <div className='flex flex-wrap gap-5 justify-between p-5'>
      {products.map(({ description, id, name, price, slug, imageUrl }: Product) => (
        <div key={id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
          <Link href={`/shop/${category}/${subCategory}/${slug}`} key={id}>
            <div className="border-solid border-2 font-bold rounded-xl p-5 cursor-pointer w-72 h-80">
              <div>
                <Image src={`https://dummyimage.com/250x250/eeeeee/000000?text=${name}`} height={250} width={250} alt={name} className="object-cover mb-2" />
                {name}
              </div>
            </div>
          </Link>

          <div>{`USD: ${price}`}</div>
          <div>{description}</div>
          <div className='flex gap-3 justify-between'>
            <ButtonMain name="Add to Cart" onClick={() => handleAddToCart({ id, name, price, slug, imageUrl, description, quantity: 1 })} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;