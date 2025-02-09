import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'; 

// Import the separate panel components
import DashboardPanel from '../components/Dashboard';
import AnalyticsPanel from '../components/Analytics';
import UsersPanel from '../components/Users';
import StudiesPanel from '../components/Studies';
import AddNewStudyPanel from '../components/AddStudy';

export default function Admin() {
  const [activePanel, setActivePanel] = useState('dashboard'); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [userInitial, setUserInitial] = useState('');
  const router = useRouter(); 

  const handlePanelChange = (panel) => {
    setActivePanel(panel); 
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Set the user's initial based on the email stored in localStorage
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail'); // Retrieve the email from localStorage
    if (userEmail) {
      const initial = userEmail[0].toUpperCase(); // Get the first letter and make it uppercase
      setUserInitial(initial);
    }
  }, []);

  // Handle logout function
  const handleLogout = () => {
    localStorage.removeItem('userEmail'); // Clear email from localStorage
    router.push('/'); // Redirect to homepage
  };

  return (
    <div className="flex min-h-screen bg-gray-50 flex-col">
      <Head>
        <title>Admin Dashboard - Quest2Go</title>
        <meta name="description" content="Admin Dashboard for managing Quest2Go" />
      </Head>

      {/* Header */}
      <div className="bg-white text-black p-4 w-full flex justify-between items-center">
        <div>
          <img src="/Logo/q2glogo.png" alt="Quest2Go Logo" className="h-8 w-8" />
        </div>
        <div className="relative flex items-center space-x-4">
          <button
            onClick={toggleDropdown}
            className="bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold"
          >
            {userInitial || 'A'}
          </button>
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md text-gray-900">
              <ul className="py-2">
                <li>
                  <button className="block px-4 py-2 text-sm hover:bg-indigo-600 hover:text-white">
                    Settings
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm hover:bg-indigo-600 hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Floating Add New Study Button */}
      <button
        onClick={() => setActivePanel('addnewstudy')}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors"
        title="Add New Study"
      >
        <span className="text-2xl font-bold">+</span>
      </button>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="bg-indigo-600 text-white w-64 p-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <ul className="mt-8 space-y-4">
            <li>
              <button onClick={() => handlePanelChange('dashboard')} className="hover:text-indigo-200">
                Dashboard
              </button>
            </li>
            <li>
              <button onClick={() => handlePanelChange('analytics')} className="hover:text-indigo-200">
                Analytics & Logs
              </button>
            </li>
            <li>
              <button onClick={() => handlePanelChange('users')} className="hover:text-indigo-200">
                Users
              </button>
            </li>
            <li>
              <button onClick={() => handlePanelChange('studies')} className="hover:text-indigo-200">
                Studies
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          {activePanel === 'dashboard' && <DashboardPanel />}
          {activePanel === 'analytics' && <AnalyticsPanel />}
          {activePanel === 'users' && <UsersPanel />}
          {activePanel === 'studies' && (
            <StudiesPanel onAddNewStudy={() => setActivePanel('addnewstudy')} />
          )}
          {activePanel === 'addnewstudy' && <AddNewStudyPanel />}
        </div>
      </div>
    </div>
  );
}
