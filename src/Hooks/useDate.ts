import { useEffect, useState } from 'react';
import { daysOfWeek } from '../data/daysOfWeek';
import { months } from '../data/months';

const useDate = () => {
  const [date, setDate] = useState('');

  const newDate = new Date();

  const getDate = () => {
    const day = newDate.getDate();
    const dayWeek = newDate.getDay();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    return `${daysOfWeek[dayWeek - 4]}, ${day}, ${months[month]}, ${year}`;
  };

  useEffect(() => {
    setDate(getDate());
  }, []);
  return { date };
};

export default useDate;
