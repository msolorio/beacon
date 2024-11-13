import React from 'react';

const TailwindTest: React.FC = () => (
  <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <div className="w-64 bg-gray-800 text-white flex flex-col items-center py-8">
      <h2 className="text-3xl font-bold mb-6">Sidebar</h2>
      <ul className="space-y-4 text-lg">
        <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-center cursor-pointer">Dashboard</li>
        <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-center cursor-pointer">Profile</li>
        <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-center cursor-pointer">Settings</li>
        <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-center cursor-pointer">Logout</li>
      </ul>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Main Content</h1>
      <p className="text-gray-600 mb-4">
        This is a simple sidebar layout built with Tailwind CSS. The sidebar on
        the left contains navigation items, while the main content is displayed
        here. You can easily customize this layout or expand it further.
      </p>

      {/* Content Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Card 1</h3>
          <p className="text-gray-600">
            This is a card component. You can place any content here, like a summary, details, or images.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Card 2</h3>
          <p className="text-gray-600">
            Here is another card for additional information. Tailwind makes it easy to create these types of layouts.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default TailwindTest;
