import React from 'react';

export default function Dashboard() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Research Studies</h3>
          <p className="text-gray-600 mt-2">200 studies</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Recent Uploads</h3>
          <p className="text-gray-600 mt-2">5 new uploads</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Pending Reviews</h3>
          <p className="text-gray-600 mt-2">3 studies pending</p>
        </div>
      </div>
    </section>
  );
}
