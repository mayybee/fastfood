import React from "react";

function CardTest(props) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
      <img className="w-full" src="https://source.unsplash.com/random/300x200" alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
          <p className="text-gray-700 text-base mb-2">
            McDonald's
          </p>
        <div className="font-bold text-xl">Artisan Grilled Chicken</div>
          
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
      </div>
    </div>
  )
}

export default CardTest;
