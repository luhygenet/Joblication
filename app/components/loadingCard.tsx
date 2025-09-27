import React from 'react'

export const JobSkeletonCard = () => (
  <div className="card flex items-start mb-5 gap-2 animate-pulse">
    {/* Logo placeholder */}
    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>

    {/* Text placeholders */}
    <div className="flex-1 space-y-2 py-1">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
  </div>
);
