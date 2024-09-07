import React, { useState, useEffect } from 'react';
import { useBanner } from '../../services/useBanner';

const Banner = () => {
  const { data, isLoading, isError } = useBanner();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && data) {
      setLoading(false);
    }
  }, [isLoading, data]);

  if (isError) {
    return <div className="text-red-500">Error loading banner data</div>; // Xatolik holati uchun
  }

  return (
    <div className="bg-gray-100 py-7">
      <div className="container px-6 mx-auto">
        {loading ? (
          <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
            <div className="mb-4 bg-gray-200 rounded-lg animate-pulse h-60"></div>
            <div className="w-1/2 h-8 mb-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-full h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: 'translateX(0%)' }}>
              {data?.length > 0 ? (
                data.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-shrink-0 w-full p-8 bg-white rounded-lg">
                    <img
                      className="max-w-xs mb-5 rounded-lg"
                      src="/bannerImg."
                      alt={`Banner image for ${item.name}`}
                    />
                    <div className="text-center">
                      <h4 className="mb-3 text-2xl font-bold text-red-500">
                        {item.name}
                      </h4>
                      <p className="max-w-md mx-auto mb-5 text-blue-900">
                        {item.disposition}
                      </p>
                      <button className="px-8 py-2 text-white bg-blue-900 rounded-lg">
                        Bepul o'rganing
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>No data available</div> // Data bo‘lmagan holat uchun
              )}
            </div>
            <button className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 left-4">
              &#9664;
            </button>
            <button className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 right-4">
              &#9654;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
