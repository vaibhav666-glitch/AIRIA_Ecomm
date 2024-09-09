import { useState } from "react";
import { Range, getTrackBackground } from 'react-range';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState('priceAsc');
  const [priceValues, setPriceValues] = useState([10, 90]);
  const [popularityValues, setPopularityValues] = useState([10, 90]);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex flex-col md:flex-row bg-gray-800 p-4 justify-between items-center">
        <div className="mb-2 md:mb-0">
          <h1 className="text-white font-semibold text-xl">Home</h1>
        </div>

        <div className="mb-2 md:mb-0">
          <h1 className="text-white font-semibold text-2xl">The AIRIA Ecomm</h1>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-center">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-md border-2 border-gray-600 bg-gray-900 text-white"
          />
          <button
            onClick={toggleFilter}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md"
          >
            Filter
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-16 right-4 md:right-0 w-full md:w-96 bg-white shadow-xl rounded-lg p-4 z-50">
          <div className="mb-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <button
                onClick={() => setSortOption('priceAsc')}
                className={`py-2 px-4 rounded-md border ${sortOption === 'priceAsc' ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-200 bg-white text-gray-600'}`}
              >
                Price Low to High
              </button>
              <button
                onClick={() => setSortOption('priceDesc')}
                className={`py-2 px-4 rounded-md border ${sortOption === 'priceDesc' ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-200 bg-white text-gray-600'}`}
              >
                Price High to Low
              </button>
              <button
                onClick={() => setSortOption('popularityAsc')}
                className={`py-2 px-4 rounded-md border ${sortOption === 'popularityAsc' ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-200 bg-white text-gray-600'}`}
              >
                Popularity Low to High
              </button>
              <button
                onClick={() => setSortOption('popularityDesc')}
                className={`py-2 px-4 rounded-md border ${sortOption === 'popularityDesc' ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-200 bg-white text-gray-600'}`}
              >
                Popularity High to Low
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2">Price Range</h3>
            <Range
              values={priceValues}
              step={1}
              min={0}
              max={100}
              onChange={setPriceValues}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="relative w-full h-2"
                  style={{
                    background: getTrackBackground({
                      values: priceValues,
                      colors: ['#ddd', '#4a4a4a', '#ddd'],
                      min: 0,
                      max: 100
                    })
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-5 h-5 bg-indigo-600 rounded-full"
                />
              )}
            />
            <div className="flex justify-between mt-2 text-sm text-gray-700">
              <span>Min: {priceValues[0]}</span>
              <span>Max: {priceValues[1]}</span>
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-2">Popularity Range</h3>
            <Range
              values={popularityValues}
              step={1}
              min={0}
              max={100}
              onChange={setPopularityValues}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="relative w-full h-2"
                  style={{
                    background: getTrackBackground({
                      values: popularityValues,
                      colors: ['#ddd', '#4a4a4a', '#ddd'],
                      min: 0,
                      max: 100
                    })
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-5 h-5 bg-indigo-600 rounded-full"
                />
              )}
            />
            <div className="flex justify-between mt-2 text-sm text-gray-700">
              <span>Min: {popularityValues[0]}</span>
              <span>Max: {popularityValues[1]}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
