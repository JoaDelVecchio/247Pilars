import { useEffect, useState } from 'react';
import ProgressCard from './ProgressCard';
import { API_BASE_URL } from '../../../config/apiUrl';

const FitnessProgressPage = () => {
  const [progress, setProgress] = useState<any>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/fitness/progress/67969b8228f9ed890840c5ca`,
          {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch progress');
        }

        const data = await response.json();
        setProgress(data.progress);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div className="flex flex-grow items-center justify-center">
      <ProgressCard progress={progress} />
    </div>
  );
};

export default FitnessProgressPage;
