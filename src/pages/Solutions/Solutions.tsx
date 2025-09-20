// src/pages/Home/Solutions.tsx

import { useState } from 'react';
import cloudkitchen from '../../assets/cloud_kitchen.jpg';
import qkservice from '../../assets/quickservice.jpeg';

// We'll define our data here for easy management
const solutionsData = [
    {
        name: 'Fine Dining',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
        description: 'Elevate your guest experience with seamless table management, split billing, and detailed reporting that gives you a complete overview of your service.',
        features: ['Advanced Table Management', 'Split & Merge KOTs', 'Customer Feedback System', 'In-depth Sales Analytics']
    },
    {
        name: 'Quick Service (QSR)',
        image: qkservice,
        description: 'Speed is everything. Our platform ensures lightning-fast billing, efficient order taking, and real-time tracking of your most popular items to keep queues moving.',
        features: ['Lightning-Fast Billing', 'Walk-in & Takeaway Modes', 'Real-time Inventory Tracking', 'Daily Sales Reports']
    },
    {
        name: 'Cloud Kitchens',
        image: cloudkitchen,
        description: 'Run your delivery business from a single dashboard. Integrate online orders, manage your raw materials precisely, and analyze your performance across platforms.',
        features: ['Online Ordering Widget', 'Centralized Menu Management', 'Raw Material & Recipe Management', 'Zomato/Swiggy Reconciliation']
    },
];


export const Solutions = () => {
    // useState hook to manage which tab is active
    const [activeTab, setActiveTab] = useState(solutionsData[1].name);

    // Find the currently active solution from the data array
    const activeSolution = solutionsData.find(solution => solution.name === activeTab);

    return (
        <section id="solutions-section" className="py-20 px-4 bg-brand-bg">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="font-besley text-4xl md:text-5xl font-bold text-brand-dark">
                    A Tailored Solution for Every Taste.
                </h2>
                <p className="font-aspekta text-lg text-brand-gray max-w-3xl mx-auto mt-4">
                    Zaptable is not a one-size-fits-all product. We provide the specific tools you need to excel, no matter your business model.
                </p>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-2 md:gap-4 my-10 flex-wrap">
                    {solutionsData.map((solution) => (
                        <button
                            key={solution.name}
                            onClick={() => setActiveTab(solution.name)}
                            className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-aspekta font-semibold text-sm md:text-base transition-colors duration-300 ${
                                activeTab === solution.name
                                    ? 'bg-brand-green text-white shadow-md'
                                    : 'bg-white text-brand-gray hover:bg-gray-200'
                            }`}
                        >
                            {solution.name}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeSolution && (
                    <div className="grid md:grid-cols-2 gap-12 items-center text-left mt-12 animate-fade-in">
                        <img src={activeSolution.image} alt={`${activeSolution.name} restaurant`} className="rounded-lg shadow-xl w-full h-80 md:h-96 object-cover" />
                        <div className="p-4">
                            <h3 className="font-besley text-3xl font-bold text-brand-dark">{activeSolution.name}</h3>
                            <p className="font-aspekta text-brand-gray mt-4 mb-6">{activeSolution.description}</p>
                            <ul className="space-y-3">
                                {activeSolution.features.map(feature => (
                                    <li key={feature} className="flex items-center font-aspekta">
                                        <svg className="w-5 h-5 mr-3 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};