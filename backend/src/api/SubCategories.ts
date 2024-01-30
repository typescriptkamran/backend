// app/api/SubCategories.js
'use server'
import fs from 'fs';
import path from 'path';
import { SubCategory } from '@/components/SubCategoryForm';


const dataFilePath = './src/data/SubCategoriesData.json';


export const SaveSubCategoriesData = async (SubCategories: SubCategory[]) => {
  try {
    const SubData = JSON.stringify(SubCategories, null, 2);
  fs.writeFileSync('./src/data/SubCategoriesData.json', SubData, 'utf-8');
    console.log('Categories data saved successfully.');
  } catch (error) {
    console.error('Error saving SubCategories data:', error);
  }
};


const retrieveCustomerData = () => {
  try {
      const SubData = fs.readFileSync('./src/data/SubCategoriesData.json', 'utf-8');
      return JSON.parse(SubData);
  }
  catch (error) {
      // If the file doesn't exist or is empty, return an empty array
      return [];
  }
};
export const LoadSubCategoriesData = async () => {
  try {
    const SubData = fs.readFileSync('./src/data/SubCategoriesData.json', 'utf-8');
      return JSON.parse(SubData);;
  } 
  catch (error) {
    // If the file doesn't exist or is empty, return an empty array
    return [];
}
};



