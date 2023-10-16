import { NewsType } from '../types';

 type ItemType = NewsType[] | { user:string, email:string };

export const addLocalStorage = (key:string, item:ItemType) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = (key:string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};
