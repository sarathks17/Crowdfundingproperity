import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 pt-14">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Profile</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Settings</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">User Name</span>
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {/* Dashboard Content */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-800">Card 1</h2>
            <p className="text-gray-600 mt-2">Some quick dashboard stats.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-800">Card 2</h2>
            <p className="text-gray-600 mt-2">Another piece of info.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-800">Card 3</h2>
            <p className="text-gray-600 mt-2">More analytics here.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
