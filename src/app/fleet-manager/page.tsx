"use client";
import dynamic from 'next/dynamic';
import '@/app/globals.css'; // Adjust the path according to your folder structure
const DemandForecast = dynamic(() => import('@/components/DemandForecast'), { ssr: false });
const FleetDashboard = dynamic(() => import('@/components/FleetDashboard'), { ssr: false });
import { FaChartLine, FaTruck, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Card from '@/components/Card';
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';

const FleetManagerPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures code runs only on the client-side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;  // Optionally render a loading state
  }

  return (
    <div className="dashboard flex min-h-screen bg-gray-100">
      {/* Collapsible Sidebar */}
      <aside className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 text-white flex flex-col sticky top-0 h-screen`}>
        <div className="p-6 text-2xl font-bold border-b border-blue-700 flex justify-between items-center">
          <button onClick={toggleSidebar} className="text-white">
            {isSidebarOpen ? '<<' : '>>'}
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <a href="#" className="p-3 rounded-md flex items-center hover:bg-blue-700 transition-all">
            <FaChartLine className="inline-block mr-3 text-xl" />
            {isSidebarOpen && <span className="text-lg">Dashboard</span>}
          </a>
          <a href="#" className="p-3 rounded-md flex items-center hover:bg-blue-700 transition-all">
            <FaTruck className="inline-block mr-3 text-xl" />
            {isSidebarOpen && <span className="text-lg">Fleet Status</span>}
          </a>
          <a href="#" className="p-3 rounded-md flex items-center hover:bg-blue-700 transition-all">
            <FaUsers className="inline-block mr-3 text-xl" />
            {isSidebarOpen && <span className="text-lg">Drivers</span>}
          </a>
          <a href="#" className="p-3 rounded-md flex items-center hover:bg-blue-700 transition-all">
            <FaCog className="inline-block mr-3 text-xl" />
            {isSidebarOpen && <span className="text-lg">Settings</span>}
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div
            style={{
              fontSize: '2rem', // A bit smaller for a professional appearance
              fontWeight: '600', // Slightly bold for a clean, professional look
              color: '#333', // A more neutral and professional color
              flexGrow: 1,
              textAlign: 'left',
              marginLeft: '1.5rem', // Keeps the margin for spacing
              letterSpacing: '0.5px', // Adds slight spacing between letters for better readability
              lineHeight: '1.25', // Adds spacing between lines for better visual balance
            }}
          >
            Fleet Manager Dashboard
          </div>
          <button
            onClick={handleLogout}
            style={{ width: '120px' }}
            className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-all text-sm"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-8">
          {/* Overview Section */}
          <section className="flex gap-8 justify-between">
            <Card title="Active Fleet" icon={<FaTruck />}>
              <p>12 Vehicles</p>
            </Card>
            <Card title="Pending Orders" icon={<FaChartLine />}>
              <p>45 Deliveries</p>
            </Card>
            <Card title="Available Drivers" icon={<FaUsers />}>
              <p>8 Drivers</p>
            </Card>
          </section>

          {/* Detailed Sections */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
              <h3 className="text-lg font-semibold mb-4">Demand Forecast</h3>
              <DemandForecast />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
              <h3 className="text-lg font-semibold mb-4">Fleet Dashboard</h3>
              <FleetDashboard />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FleetManagerPage;
