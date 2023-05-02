import React from 'react';
import breakfast from '../../../assets/breakfast.jpg'
import lunch from '../../../assets/lunch.jpg'
import dinner from '../../../assets/dinner.jpg'
const Menus = () => {
  return (
    <div className="grid grid-cols-3 space-x-2 ">
      {/* breakfast */}
      <div
        className="overflow-hidden relative transition duration-200
       transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
      >
        <img src={breakfast} alt="" className="" />
        <p className="absolute top-4 right-3 text-white py-2 px-4 bg-red-700 rounded-xl">
          BREAKFAST
        </p>
        <div
          className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100
         text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col"
        >
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, quo
            tenetur minima laudantium aspernatur debitis!...
          </p>
          <br />
          <p className="my-4">Price:125$</p>
          <button className="bg-red-600 p-3 w-1/2 rounded-lg text-white">
            See More
          </button>
        </div>
      </div>
      {/* lunch */}
      <div
        className="overflow-hidden relative transition duration-200
       transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
      >
        <img src={lunch} alt="" className="" />
        <p className="absolute top-4 right-3 text-white py-2 px-4 bg-red-700 rounded-xl">
          LUNCH
        </p>
        <div
          className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100
         text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col"
        >
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, quo
            tenetur minima laudantium aspernatur debitis!...
          </p>
          <br />
          <p className="my-4">Price:56$</p>
          <button className="bg-red-600 p-3 w-1/2 rounded-lg text-white">
            See More
          </button>
        </div>
      </div>
      {/* dinner */}
      <div
        className="overflow-hidden relative transition duration-200
       transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
      >
        <img src={dinner} alt="" className="" />
        <p className="absolute top-4 right-3 text-white py-2 px-4 bg-red-700 rounded-xl">
          DINNER
        </p>
        <div
          className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100
         text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col"
        >
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, quo
            tenetur minima laudantium aspernatur debitis!...
          </p>
          <br />
          <p className="my-4">Price:45$</p>
          <button className="bg-red-600 p-3 w-1/2 rounded-lg text-white">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menus;