import React, { useState } from 'react';
import { Modal } from './Modal'; // Ensure Modal is properly exported as a named export from its file

// Define the Plan type
interface Plan {
  title: string;
  features: string[];
  price: string;
  url: string;
}

// Define PlanCardProps to use with the PlanCard component
interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const [isModalOpen, setModalOpen] = useState(false); // Manages the state of the modal's visibility

  return (
    <div className="p-6 bg-dark-2 rounded-lg border border-dark-4 flex flex-col items-center gap-5">
      <h3 className="text-light-1 text-2xl font-bold">{plan.title}</h3>
      <ul className="list-none">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-light-1">{feature}</li> // Key index is acceptable here, better if features have unique ids
        ))}
      </ul>
      <p className="text-light-1 font-bold text-xl">{plan.price}</p>
      <button 
        className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition duration-300" 
        onClick={() => setModalOpen(true)} // Toggles modal visibility
      >
        Choose Plan
      </button>
      <Modal url={plan.url} isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default PlanCard;
