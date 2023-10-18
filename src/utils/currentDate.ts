import { daysOfWeek } from '../data/daysOfWeek';
import { months } from '../data/months';

export const currentDate = () => {
  const newDate = new Date();

  const day = newDate.getDate();
  const dayWeek = newDate.getDay();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  return `${daysOfWeek[dayWeek]}, ${day}, ${months[month]}, ${year}`;
};
