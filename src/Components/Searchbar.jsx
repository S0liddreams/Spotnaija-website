"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  const handleIconClick = () => {
    setIsExpanded(true);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="flex items-center rounded-lg h-10">
       
        
        {/* Conditionally render the input based on whether it's expanded */}
        {isExpanded && (
          <input
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search..."
            autoFocus
            className={`transition-all duration-300 ease-in-out w-full h-full px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500`}
          />
        )}

         {/* Search icon with onClick handler */}
         <CiSearch
          className="text-black text-[25px] mx-2  cursor-pointer"
          onClick={handleIconClick}
        />
      </div>
    </div>
  );
}