"use client";
import DeliveryBoxOptimization from "@/components/DeliveryBoxOptimization";
import { FaBox, FaUser, FaSignOutAlt, FaBars } from "react-icons/fa"; // Added icons
import { useState } from "react";
import { useRouter } from "next/navigation";

const CustomerPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-blue-800 text-white flex flex-col sticky top-0 h-screen`}
      >
        <div className="p-6 text-2xl font-bold border-b border-blue-700 flex items-center justify-between">
          {isSidebarOpen && <span>Customer Menu</span>}
          <button onClick={toggleSidebar} className="text-white">
            <FaBars size={20} />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <button
            className="block p-3 rounded-md flex items-center hover:bg-blue-700 transition-all w-full text-left"
            onClick={() => router.push("/box-optimization")}
          >
            <FaBox className="text-xl mr-3" />
            {isSidebarOpen && <span className="text-lg">Box Optimization</span>}
          </button>
          <button
            className="block p-3 rounded-md flex items-center hover:bg-blue-700 transition-all w-full text-left"
            onClick={() => router.push("/profile")}
          >
            <FaUser className="text-xl mr-3" />
            {isSidebarOpen && <span className="text-lg">Customer Profile</span>}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="text-2xl font-semibold text-gray-800">
            Customer Dashboard
          </div>

          <button
            onClick={handleLogout}
            style={{width:'124px'}}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="bg-white shadow-lg rounded-lg p-6 transition-all hover:shadow-xl">
            <h3 className="text-lg font-semibold mb-4">
              Delivery Box Optimization
            </h3>
            <DeliveryBoxOptimization />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerPage;
