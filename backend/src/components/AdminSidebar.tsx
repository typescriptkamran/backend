// components/AdminSidebar.js
import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 h-screen">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul>
      <li className="mb-3">
          <Link href="/admin/upload-image" className="hover:underline">
             Upload Image
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/admin/add-category" className="hover:underline">
             Add Category
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/admin/add-subcategory" className="hover:underline">
            Add Subcategory
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/admin/add-size" className="hover:underline">
            Add Size
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/admin/add-country" className="hover:underline">
            Add Country
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/admin/add-city" className="hover:underline">
            Add city
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/admin/add-area" className="hover:underline">
            Add Area
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/admin/add-curency" className="hover:underline">
            Add Curency
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/admin/add-partners" className="hover:underline">
            Add Partner
          </Link>
        </li>
        
        <li className="mb-3">
          <Link href="/admin/add-product" className="hover:underline">
            Add Product
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
