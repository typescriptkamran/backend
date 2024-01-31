// app/api/Sizes.ts
'use server'
import fs from 'fs';
import path from 'path';
import { Size } from '@/components/SizeForm';


const dataFilePath = './src/data/SizesData.json';


export const SaveCountriesData = async (sizes: Size[]) => {
  try {
    const jsonData = JSON.stringify(sizes, null, 2);
  fs.writeFileSync('./src/data/SizesData.json', jsonData, 'utf-8');
    console.log('Sizes data saved successfully.');
  } catch (error) {
    console.error('Error saving sizes data:', error);
  }
};


const retrieveCustomerData = () => {
  try {
      const jsonData = fs.readFileSync('./src/data/SizesData.json', 'utf-8');
      return JSON.parse(jsonData);
  }
  catch (error) {
      // If the file doesn't exist or is empty, return an empty array
      return [];
  }
};
export const LoadCountryData = async () => {
  try {
    const jsonData = fs.readFileSync('./src/data/SizesData.json', 'utf-8');
      return JSON.parse(jsonData);
      
  } 
  catch (error) {
    // If the file doesn't exist or is empty, return an empty array
    return [];
}
};



