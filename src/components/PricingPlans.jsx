import React from 'react';

const PricingPlans = ({ option }) => {
    return (
        <div className="bg-[#ffecd1] w-[350px] h-[500px] md:h-[600px] lg:w-[400px] grid rounded-lg p-4 mb-5 md:mb-7">
            <h2 className="text-4xl text-[#001524] text-center font-extrabold mb-5">{option.title}</h2>
            <h4 className="text-lg text-center font-bold mb-5">Price: {option.price}</h4>
            <h4 className="text-lg text-center font-bold mb-5">Quality: {option.quality}</h4>
            <h4 className="text-lg text-center font-bold mb-8">Resolution: {option.resolution}</h4>
            <h3 className='text-center'>Devices you can use to watch:</h3>
            <ul className="m-1 md:m-6">
                {option.devices.map((devices, index) => (
                <li key={index} className="mb-1 text-[#001524]">
                    {devices}
                </li>
                ))}
            </ul>
            <button className="bg-teal-600 text-[#ffecd1] font-bold text-xl py-2 px-4 rounded w-full hover:bg-[#001524]">
                Select Plan
            </button>
        </div>
    );
};

export default PricingPlans;