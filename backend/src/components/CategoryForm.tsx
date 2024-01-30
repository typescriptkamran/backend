'use client'
// app/pages/index.tsx
import { SaveCategoriesData, LoadCategoriesData } from '@/api/categories';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

export interface Category {
  id: number;
  name: string;
  slug: string;
}

const CategoryForm = (): JSX.Element => {
  const [categoryName, setCategoryName] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Load existing categories from JSON file
    const fetchData = async (): Promise<void> => {
      try {
        const data = await LoadCategoriesData();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleAddCategory = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const newCategory: Category = {
      id: categories.length + 1,
      name: categoryName,
      slug: categoryName.toLowerCase().replace(/\s+/g, '-'),
    };

    // Update state with the new category
    setCategories([...categories, newCategory]);

    // Save categories to JSON file on the server
    await SaveCategoriesData(categories);

    // Clear the input field
    setCategoryName('');
  };

  const handleUpdateCategory = async (categoryId: number): Promise<void> => {
    // Placeholder logic, update based on your actual requirements
    alert(`Update category with id ${categoryId}`);
  };

  const handleRemoveCategory = async (categoryId: number): Promise<void> => {
    const updatedCategories = categories.filter((category) => category.id !== categoryId);

    // Update state with the updated categories
    setCategories(updatedCategories);

    // Save updated categories to JSON file on the server
    await SaveCategoriesData(updatedCategories);
  };

  const handleSaveChanges = async (): Promise<void> => {
    // Save categories to JSON file on the server
    await SaveCategoriesData(categories);
  };



  return (
      <div>
      <button
        onClick={handleSaveChanges}
        className="absolute right-4 bg-green-500 text-white p-2 rounded"
      >
        Save Changes
      </button>

      <form onSubmit={handleAddCategory} className="mb-4">
        <label>
          Category Name:
          <input
            type="text"
            value={categoryName}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setCategoryName(e.target.value)}
            className="ml-2 p-2 border rounded"
            required
          />
        </label>
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
          Add Category
        </button>
      </form>

      {categories.length > 0 && (
        <div>
          <h2>Added Categories:</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                {category.name} - {category.slug}{' '}
                <button
                  onClick={(): Promise<void> => handleUpdateCategory(category.id)}
                  className="ml-2 bg-yellow-500 text-white p-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={(): Promise<void> => handleRemoveCategory(category.id)}
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
    

export default CategoryForm;
