import { useState } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="flex w-full h-screen">

     {/* Grid1 */}
<div className="flex justify-center items-start h-full bg-white text-white text-2xl font-bold w-[220px]"> {/* Align at the top */}
  <div className="flex flex-col items-center space-y-3 mt-2 mb-2">  {/* Items centered inside Grid1 */}

    {/* Logo and Quest2Go Text */}
    <div className="flex items-center space-x-2"> {/* Reduced margin-bottom */}
      <img src="/logo/q2glogo.png" alt="Quest2Go Logo" className="w-8 h-8" />
      <h1 className="text-xl font-bold text-black font-medium">Quest2Go</h1>
    </div>

    {/* Search Field with Centered MagnifyingGlassIcon */}
    <div className="relative flex justify-center items-center w-full mb-3 border-2 border-gray-300 rounded-full"> {/* Removed mt */}
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
      <input 
        type="text" 
        className="flex items-center justify-center border-2 p-2 pl-10 rounded-full w-[200px] h-6 text-xs text-left text-black focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-200 transition duration-200" 
        placeholder="Search..." 
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>

    {/* Line Below Search Field */}
    <div className="w-full border-b border-gray-200 mb-4"></div> {/* Line added here */}

    {/* Year Range Text and Input Boxes */}
    <div className="flex flex-col items-center space-y-1 mt-3 mb-2">  
      {/* "Year range" Label aligned to the left */}
      <p className="text-black text-sm font-medium text-left w-full mt-5">Year range</p>
      
      <div className="flex items-center space-x-1">
        <input 
          type="text" 
          className="border border-gray-400 p-2 rounded w-20 h-5 text-xs text-left text-black focus:border-gray-400 focus:ring-0 focus:outline-none" 
        />
        <span className="text-black text-lg">-</span>
        <input 
          type="text" 
          className="border border-gray-400 p-2 rounded w-20 h-5 text-xs text-left text-black focus:border-gray-400 focus:ring-0 focus:outline-none" 
        />
      </div>
    </div>

    {/* Search Button */}
    <button className="bg-blue-500 text-white p-1 rounded mt-2 mb-2 hover:bg-blue-600 h-5 w-15 text-xs leading-none">
      Search
    </button>
  </div>
</div>



        {/* Grid2 */}
        <div className="flex flex-col justify-center items-start h-full bg-white text-white text-2xl font-bold flex-grow px-8 pl-8">
          <p className="text-4xl text-black font-serif" style={{ fontFamily: 'Lora, serif' }}>
            Find and understand
          </p>
          <p className="text-4xl text-black font-serif" style={{ fontFamily: 'Lora, serif' }}>
            Research better
          </p>

          {/* Search Field and Button */}
          <div className="mt-6 w-full flex items-center">
            <div className="flex border-2 border-indigo-100 rounded-md shadow-xl shadow-indigo-300/50">
              <input
                type="text"
                placeholder="Search using keywords, titles, authors, or DOIs"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-[500px] h-[40px] px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-black bg-white rounded-md text-sm font-montserrat font-normal placeholder-gray-400"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center justify-center h-[40px] w-16 font-montserrat font-normal" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <p className="font-montserrat font-medium text-black">Browse Learning Resources</p>
          </div>
        </div>

      </div>
    </div>
  );
}
