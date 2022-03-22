import { useState } from 'react';
import apiCall from '../apis';
import { hoursToMinutes } from '../utils';

interface Value {
  asleep?: string;
  bed?: string;
};

const useCalculate = () => {
  const [value, setValue] = useState<Value>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleCalculate = async() => {
    setLoading(true);
    const asleepMinutes = hoursToMinutes(value.asleep);
    const bedMinutes = hoursToMinutes(value.bed);
    const score = 100 * asleepMinutes / bedMinutes;

    const response = await apiCall({
      url: `https://example.com`,
      method: 'PUT',
      data: {
        score
      }
    });
    if (response.error) {
      setScore(response.message);
    } else {
      setScore(score);
    }
    setLoading(false);
  }

  return {
    score,
    value,
    setValue,
    loading,
    setLoading,
    handleCalculate
  }
}

export default useCalculate;