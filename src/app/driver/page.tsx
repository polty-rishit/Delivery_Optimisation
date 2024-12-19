"use client";
import RouteOptimizer from '@/components/RouteOptimizer';
import CO2EmissionRouting from '@/components/CO2EmissionRouting';
import PredictiveMaintenance from '@/components/PredictiveMaintenance';
import { FaRoute, FaLeaf, FaWrench } from 'react-icons/fa'; // Icons for the sidebar
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DriverPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 text-white flex flex-col sticky top-0 h-screen`}
      >
        <div className="p-6 text-2xl font-bold border-b border-blue-700 flex justify-between items-center">
          <button onClick={toggleSidebar} className="text-white">
            {isSidebarOpen ? '<<' : '>>'}
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <a href="#" className="p-3 rounded-md flex items-center hover:bg-blue-700 transition-all">
            <FaRoute className="inline-block mr-3 text-xl" />
            {isSidebarOpen && <span className="text-lg">Route Optimizer</span>}
          </a>
          <a href="#" className="p-3 rounded-md flex items-center hover:bg-blue-700 transition-all">
            <FaLeaf className="inline-block mr-3 text-xl" />
            {isSidebarOpen && <span className="text-lg">CO2 Emission Routing</span>}
          </a>
          <a href="#" className="p-3 rounded-md flex items-center hover:bg-blue-700 transition-all">
            <FaWrench className="inline-block mr-3 text-xl" />
            {isSidebarOpen && <span className="text-lg">Predictive Maintenance</span>}
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div
            style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#333',
              flexGrow: 1,
              textAlign: 'left',
              marginLeft: '1.5rem',
              letterSpacing: '0.5px',
              lineHeight: '1.25',
            }}
          >
            Driver Dashboard
          </div>

          <button
            onClick={handleLogout}
            style={{ width: '120px' }}
            className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-all text-sm"
          >
            Logout
          </button>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Route Optimizer */}
            <div className="lg:col-span-1 bg-white shadow-lg rounded-lg p-6">
              <RouteOptimizer />
            </div>

            {/* Right Column: CO2 Emission Routing and Predictive Maintenance */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
          <CO2EmissionRouting />
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
          <PredictiveMaintenance />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DriverPage;
