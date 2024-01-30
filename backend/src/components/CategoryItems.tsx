import Cards from '@/components/Cards';
import {Category, categories} from '@/data/Categories';



const CategoryItems = ({categoryParam, subCategoryParam}: {categoryParam: string, subCategoryParam: string}) => {

    const products = categories.find((category: Category)=>category.slug === categoryParam)?.subcategories.find((Subcategory)=>Subcategory.slug === subCategoryParam)?.products
    
      if (products) {
        return (
      
          <div className='w-full h-screen'>
      
            <Cards products={products} category={categoryParam} subCategory={subCategoryParam} />
          </div>
        )
      }
      return (
        <h1>NO PRODUCTS</h1>
      );
  }
  

export default CategoryItems