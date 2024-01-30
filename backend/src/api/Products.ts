// app/api/products.ts
'use server'
import fs from 'fs';
import path from 'path';


const dataFilePath = './src/data/ProductData.json';

export interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    catSlug: string
    subCategory: string;
    subSlug: string;
    shortDesc: string;
    longDesc: string;
    price: number;
    imageUrl: string;
    status: boolean;
  }


export const SaveProductData = async (Product: Product[]) => {
  try {
    const SubData = JSON.stringify(Product, null, 2);
  fs.writeFileSync('./src/data/ProductData.json', SubData, 'utf-8');
    console.log('Product data saved successfully.');
  } catch (error) {
    console.error('Error saving Product data:', error);
  }
};


const retrieveProductData = () => {
  try {
      const SubData = fs.readFileSync('./src/data/ProductData.json', 'utf-8');
      return JSON.parse(SubData);
  }
  catch (error) {
      // If the file doesn't exist or is empty, return an empty array
      return [];
  }
};
export const LoadProductData = async () => {
  try {
    const ProData = fs.readFileSync('./src/data/ProductData.json', 'utf-8');
      return JSON.parse(ProData);;
  } 
  catch (error) {
    // If the file doesn't exist or is empty, return an empty array
    return [];
}
};

