import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

export default function Users() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900">Users</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <h3 className="text-xl font-semibold">Registered Users</h3>
        <table className="mt-4 w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">john@example.com</td>
              <td className="px-4 py-2 flex space-x-2">
                <button className="text-indigo-600 hover:text-indigo-800">
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
