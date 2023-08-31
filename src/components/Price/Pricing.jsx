import React from 'react';
import PricingPlans from './PricingPlans';

const PricingPage = () => {
    const pricingOptions = [
        {
        title: 'Basic Plan',
        price: 'PHP249',
        quality: 'Good',
        resolution: '720p',
        devices: ['Phone ', 'Tablet ', 'Computer ', 'TV'],
        },
        {
        title: 'Standard Plan',
        price: 'PHP399',
        quality: 'Better',
        resolution: '1080p',
        devices: ['Phone ', 'Tablet ', 'Computer ', 'TV']
        },
        {
        title: 'Premium Plan',
        price: 'PHP549',
        quality: 'Best',
        resolution: '1080p',
        devices: ['Phone ', 'Tablet ', 'Computer ', 'TV']
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-t from-[#243d51]">
            <h1 className='text-4xl font-bold text-center mt-10 text-[#ffecd1]'>Choose a Plan</h1>
            <p className='text-xl font-bold text-center mb-10 tracking-widest'>Get the plan that's right for you</p>
            <div className='flex justify-center items-center'>
                <div className="grid grid-cols md:grid-cols-3 gap-8 text-[#001524]">
                    {pricingOptions.map((option, index) => (
                    <PricingPlans key={index} option={option} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
