import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

export default function Studies({ onAddNewStudy }) {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">All Research Studies</h2>
        <button
          onClick={onAddNewStudy}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Add New Study
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <h3 className="text-xl font-semibold">All Research Studies</h3>
        <table className="mt-4 w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Study 1</td>
              <td className="px-4 py-2">Science</td>
              <td className="px-4 py-2 flex space-x-2">
                <button className="text-indigo-600 hover:text-indigo-800">
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
            {/* Map through your studies data here */}
          </tbody>
        </table>
      </div>
    </section>
  );
}
