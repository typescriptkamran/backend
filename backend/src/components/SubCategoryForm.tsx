'use client'
// app/pages/index.tsx
import { SaveSubCategoriesData, LoadSubCategoriesData } from '@/api/SubCategories';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Category } from './CategoryForm';
import { LoadCategoriesData } from '@/api/categories';





export interface SubCategory {
  id: number;
  name: string;
  slug: string;
  category: string; 
}

const SubCategoryForm = (): JSX.Element => {
    const [subCategoryName, setSubCategoryName] = useState<string>('');
    const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [categories, setCategories] = useState<Category[]>([]);
  
    useEffect(() => {
      const fetchData = async (): Promise<void> => {
        try {
          const categoriesData = await LoadCategoriesData();
          setCategories(categoriesData);
        } catch (error) {
          console.error('Error fetching categories data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      const fetchData = async (): Promise<void> => {
        try {
          const subCategoriesData = await LoadSubCategoriesData();
          setSubCategories(subCategoriesData);
        } catch (error) {
          console.error('Error fetching subcategories data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleAddSubCategory = async (e: FormEvent): Promise<void> => {
      e.preventDefault();
  
      const newSubCategory: SubCategory = {
        id: subCategories.length + 1,
        name: subCategoryName,
        slug: subCategoryName.toLowerCase().replace(/\s+/g, '-'),
        category: selectedCategory,
      };
  
      // Update state with the new SubCategory
      setSubCategories([...subCategories, newSubCategory]);
  
      // Save SubCategories to JSON file on the server
      await SaveSubCategoriesData([...subCategories, newSubCategory]);
  
      // Clear the input field and selected category
      setSubCategoryName('');
      setSelectedCategory('');
    };
  
    const handleUpdateSubCategory = async (subCategoryId: number): Promise<void> => {
      // Placeholder logic, update based on your actual requirements
      alert(`Update SubCategory with id ${subCategoryId}`);
    };
  
    const handleRemoveSubCategory = async (subCategoryId: number): Promise<void> => {
      const updatedSubCategories = subCategories.filter(
        (subCategory) => subCategory.id !== subCategoryId
      );
  
      // Update state with the updated SubCategories
      setSubCategories(updatedSubCategories);
  
      // Save updated SubCategories to JSON file on the server
      await SaveSubCategoriesData(updatedSubCategories);
    };
  
    const handleSaveChanges = async (): Promise<void> => {
      // Save SubCategories to JSON file on the server
      await SaveSubCategoriesData(subCategories);
    };
  
    return (
      <div>
        <button
          onClick={handleSaveChanges}
          className="absolute right-4 bg-green-500 text-white p-2 rounded"
        >
          Save Changes
        </button>
  
        <form onSubmit={handleAddSubCategory} className="mb-4">
          <label>
            SubCategory Name:
            <input
              type="text"
              value={subCategoryName}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setSubCategoryName(e.target.value)
              }
              className="ml-2 p-2 border rounded"
              required
            />
          </label>
          <label className="ml-2">
            Select Category:
            <select
              value={selectedCategory}
              onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
                setSelectedCategory(e.target.value)
              }
              className="ml-2 p-2 border rounded"
              required
            >
              <option value="" disabled>
                Choose a category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
            Add SubCategory
          </button>
        </form>
  
        {subCategories.length > 0 && (
          <div>
            <h2>Added SubCategories:</h2>
            <ul>
              {subCategories.map((subCategory) => (
                <li key={subCategory.id}>
                  {subCategory.name} - {subCategory.slug}{' '}
                  <button
                    onClick={(): Promise<void> => handleUpdateSubCategory(subCategory.id)}
                    className="ml-2 bg-yellow-500 text-white p-2 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={(): Promise<void> => handleRemoveSubCategory(subCategory.id)}
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
  
  export default SubCategoryForm;