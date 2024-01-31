'use client'
// app/pages/index.tsx
import { SaveCountriesData as SaveCountriesData, LoadCountriesData as LoadCountriesData } from '@/api/Countries';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

export interface Country {
  id: number;
  name: string;
  slug: string;
}

const CountryForm = (): JSX.Element => {
  const [CountryName, setCountryName] = useState<string>('');
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    // Load existing Country from JSON file
    const fetchData = async (): Promise<void> => {
      try {
        const data = await LoadCountriesData();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleAddCountry = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const newCountry: Country = {
      id: countries.length + 1,
      name: CountryName,
      slug: CountryName.toLowerCase().replace(/\s+/g, '-'),
    };

    // Update state with the new Country
    setCountries([...countries, newCountry]);

    // Save Country to JSON file on the server
    await SaveCountriesData(countries);

    // Clear the input field
    setCountryName('');
  };

  const handleUpdateCountry = async (CountryId: number): Promise<void> => {
    // Placeholder logic, update based on your actual requirements
    alert(`Update Country with id ${CountryId}`);
  };

  const handleRemoveCountry = async (CountryId: number): Promise<void> => {
    const updatedCountries = countries.filter((Country) => Country.id !== CountryId);

    // Update state with the updated Country
    setCountries(updatedCountries);

    // Save updated Country to JSON file on the server
    await SaveCountriesData(updatedCountries);
  };

  const handleSaveChanges = async (): Promise<void> => {
    // Save Country to JSON file on the server
    await SaveCountriesData(countries);
  };



  return (
      <div>
      <button
        onClick={handleSaveChanges}
        className="absolute right-4 bg-green-500 text-white p-2 rounded"
      >
        Save Changes
      </button>

      <form onSubmit={handleAddCountry} className="mb-4">
        <label>
          Country Name:
          <input
            type="text"
            value={CountryName}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setCountryName(e.target.value)}
            className="ml-2 p-2 border rounded"
            required
          />
        </label>
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
          Add Country
        </button>
      </form>

      {countries.length > 0 && (
        <div>
          <h2>Added Countries:</h2>
          <ul>
            {countries.map((Country) => (
              <li key={Country.id}>
                {Country.name} - {Country.slug}{' '}
                <button
                  onClick={(): Promise<void> => handleUpdateCountry(Country.id)}
                  className="ml-2 bg-yellow-500 text-white p-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={(): Promise<void> => handleRemoveCountry(Country.id)}
                  className="ml-2 bg-red-500 text-white p-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
    

export default CountryForm;
