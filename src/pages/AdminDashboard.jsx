import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userRole = localStorage.getItem('userRole');
    
    if (!isAuthenticated || userRole !== 'admin') {
      // Redirect to login if not authenticated or not admin
      navigate('/admin_login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="bg-primary shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        </div>
      </div>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-neutral-200 rounded-lg p-6 bg-white">
              <h2 className="text-xl font-semibold mb-4">Welcome to the Admin Panel</h2>
              <p className="mb-4 text-gray-600">This is a protected area. You are logged in as an administrator.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-medium text-lg">User Management</h3>
                  <p className="text-neutral-500">Manage user accounts and permissions</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-medium text-lg">Content Management</h3>
                  <p className="text-neutral-500">Update website content and blog posts</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-medium text-lg">Appointment Management</h3>
                  <p className="text-neutral-500">View and manage appointment bookings</p>
                </div>
              </div>
              <div className="mt-8">
                <button 
                  onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    localStorage.removeItem('userRole');
                    navigate('/admin_login');
                  }}
                  className="bg-error hover:bg-opacity-90 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard; 