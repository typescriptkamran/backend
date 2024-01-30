'use client'
// Import necessary libraries
import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

// Define the Admin component
const AdminLogin = () => {
  // State variables
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for login button
  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      setMessage('Login successful. Welcome, admin!');
    } else {
      setMessage('Invalid username or password. Please try again.');
    }
  };

  // Event handler for logout button
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  // Event handler for form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    handleLogin();
  };

  // Render content based on login state
  return (
    <div className="h-full w-full min-h-screen flex items-center justify-center bg-gray-100">
      {!isLoggedIn ? (
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          {message && <p className="text-red-500 mt-2">{message}</p>}
        </div>
      ) : (
        <div className="w-full flex text-center">
          
          <div>
            <h1 className="w-full h-screentext-2xl font-bold mb-4">Welcome, admin!</h1>
            {/* Add your page content here */}
            <p>Your admin content goes here.</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the Admin component
export default AdminLogin;
