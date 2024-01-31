// app/api/Countries.ts
'use server'
import fs from 'fs';
import path from 'path';
import { Country } from '@/components/CountryForm';


const dataFilePath = './src/data/CountriesData.json';


export const SaveCountriesData = async (Countries: Country[]) => {
  try {
    const jsonData = JSON.stringify(Countries, null, 2);
  fs.writeFileSync('./src/data/CountriesData.json', jsonData, 'utf-8');
    console.log('Sizes data saved successfully.');
  } catch (error) {
    console.error('Error saving sizes data:', error);
  }
};


const retrieveCountriesData = () => {
  try {
      const jsonData = fs.readFileSync('./src/data/CountriesData.json', 'utf-8');
      return JSON.parse(jsonData);
  }
  catch (error) {
      // If the file doesn't exist or is empty, return an empty array
      return [];
  }
};
export const LoadCountriesData = async () => {
  try {
    const jsonData = fs.readFileSync('./src/data/CountriesData.json', 'utf-8');
      return JSON.parse(jsonData);
      
  } 
  catch (error) {
    // If the file doesn't exist or is empty, return an empty array
    return [];
}
};



