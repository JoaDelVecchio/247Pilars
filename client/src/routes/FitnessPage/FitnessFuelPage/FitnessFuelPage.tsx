import FuelCard from './FuelCard';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../config/apiUrl';

const FitnessFuelPage = () => {
  const [fuelPlan, setFuelPlan] = useState<any>(null);

  useEffect(() => {
    const fetchFuelPlan = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/fitness/fuel`, {
          method: 'GET',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch fuel plan');
        }

        const data = await response.json();
        setFuelPlan(data.fuelPlan);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFuelPlan();
  }, []);
  return (
    <div className="flex flex-grow items-center justify-center">
      <FuelCard fuelPlan={fuelPlan} />
    </div>
  );
};

export default FitnessFuelPage;
