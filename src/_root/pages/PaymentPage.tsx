// import React from 'react';
import PlanCard from './PlanCard.tsx';

const PaymentPage = () => {
    const plans = [
        {
            title: "Free Plan",
            features: ["Access to basic features", "Limited support"],
            price: "Free",
            url: "http://example.com/agency"
        },
        {
            title: "Premium Plan",
            features: ["Everything in Free", "Premium support", "Extra features"],
            price: "$9.99/month",
            url: "https://app.unlock-protocol.com/checkout?id=11f43d6e-4912-479a-9470-32196d0395b5"
        },
        {
            title: "Agency Plan",
            features: ["Everything in Premium", "Advanced settings", "Unlimited usage", "Dedicated support"],
            price: "coming soon",

            url: "http://example.com/agency"
        }
    ];

    return (
        <div className="common-container">
            <h1 className="text-light-1 text-3xl font-bold mb-10">Select Your Plan</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {plans.map((plan, index) => (
                    <PlanCard key={index} plan={plan} />
                ))}
            </div>
        </div>
    );
};

export default PaymentPage;
