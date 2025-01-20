import { useState } from 'react';
import PlanCard from '../components/ui/plancard';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {
    const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const plans = [
    {
      title: 'Monthly Plan',
      price: '$9.99',
      duration: 'month',
      features: ['Basic access to all features', '24/7 Customer Support', 'Single user license'],
      isHighlighted: false,
    },
    {
      title: 'Yearly Plan',
      price: '$89.99',
      duration: 'year',
      features: [
        'All Monthly Plan features',
        'Save 25% annually',
        'Priority support',
        'Advanced features',
      ],
      isHighlighted: true,
    },
    {
      title: 'Family Plan',
      price: '$149.99',
      duration: 'year',
      features: [
        'Up to 5 family members',
        'All Yearly Plan features',
        'Family dashboard',
        'Parental controls',
      ],
      isHighlighted: false,
    },
  ];

  const handleSelectPlan = (index: number) => {
    setSelectedPlan(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors">
        <button
            onClick={() => navigate(-1)}
            className="absolute px-4 py-2 rounded-lg text-md font-medium text-black dark:text-white hover:text-blue-300"
          >
            <IconArrowLeft size={20} />
          </button>
      {/* Stylish Header */}
      <div className="text-center py-10 bg-slate-600 text-white dark:bg-blue-600"> 
        <h1 className="text-4xl font-extrabold">Choose Your Perfect Plan</h1>
        <p className="mt-2 text-lg">Select the plan that best suits your needs</p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8 justify-center mt-10">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            {...plan}
            isSelected={selectedPlan === index}
            onSelect={() => handleSelectPlan(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
