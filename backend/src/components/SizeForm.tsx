'use client'
// app/pages/index.tsx
import { SaveCountriesData as SaveCountriesData, LoadCountryData as LoadCountryData } from '@/api/Sizes';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

export interface Size {
  id: number;
  name: string;
  slug: string;
}

const SizeForm = (): JSX.Element => {
  const [SizeName, setSizeName] = useState<string>('');
  const [sizes, setsizes] = useState<Size[]>([]);

  useEffect(() => {
    // Load existing Sizes from JSON file
    const fetchData = async (): Promise<void> => {
      try {
        const data = await LoadCountryData();
        setsizes(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleAddSize = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const newSize: Size = {
      id: sizes.length + 1,
      name: SizeName,
      slug: SizeName.toLowerCase().replace(/\s+/g, '-'),
    };

    // Update state with the new Size
    setsizes([...sizes, newSize]);

    // Save Size to JSON file on the server
    await SaveCountriesData(sizes);

    // Clear the input field
    setSizeName('');
  };

  const handleUpdateSize = async (SizeId: number): Promise<void> => {
    // Placeholder logic, update based on your actual requirements
    alert(`Update Size with id ${SizeId}`);
  };

  const handleRemoveSize = async (sizeId: number): Promise<void> => {
    const updatedSizes = sizes.filter((size) => size.id !== sizeId);

    // Update state with the updated Sizes
    setsizes(updatedSizes);

    // Save updated sizes to JSON file on the server
    await SaveCountriesData(updatedSizes);
  };

  const handleSaveChanges = async (): Promise<void> => {
    // Save sizes to JSON file on the server
    await SaveCountriesData(sizes);
  };



  return (
      <div>
      <button
        onClick={handleSaveChanges}
        className="absolute right-4 bg-green-500 text-white p-2 rounded"
      >
        Save Changes
      </button>

      <form onSubmit={handleAddSize} className="mb-4">
        <label>
          Size Name:
          <input
            type="text"
            value={SizeName}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setSizeName(e.target.value)}
            className="ml-2 p-2 border rounded"
            required
          />
        </label>
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
          Add Size
        </button>
      </form>

      {sizes.length > 0 && (
        <div>
          <h2>Added Sizes:</h2>
          <ul>
            {sizes.map((size) => (
              <li key={size.id}>
                {size.name} - {size.slug}{' '}
                <button
                  onClick={(): Promise<void> => handleUpdateSize(size.id)}
                  className="ml-2 bg-yellow-500 text-white p-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={(): Promise<void> => handleRemoveSize(size.id)}
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
    

export default SizeForm;
