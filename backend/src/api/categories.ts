// app/api/categories.js
'use server'
import fs from 'fs';
import path from 'path';
import { Category } from '@/components/CategoryForm';


const dataFilePath = './src/data/CategoriesData.json';


export const SaveSizesData = async (categories: Category[]) => {
  try {
    const jsonData = JSON.stringify(categories, null, 2);
  fs.writeFileSync('./src/data/CategoriesData.json', jsonData, 'utf-8');
    console.log('Categories data saved successfully.');
  } catch (error) {
    console.error('Error saving categories data:', error);
  }
};


const retrieveCustomerData = () => {
  try {
      const jsonData = fs.readFileSync('./src/data/CategoriesData.json', 'utf-8');
      return JSON.parse(jsonData);
  }
  catch (error) {
      // If the file doesn't exist or is empty, return an empty array
      return [];
  }
};
export const LoadCategoriesData = async () => {
  try {
    const jsonData = fs.readFileSync('./src/data/CategoriesData.json', 'utf-8');
      return JSON.parse(jsonData);
      
  } 
  catch (error) {
    // If the file doesn't exist or is empty, return an empty array
    return [];
}
};



