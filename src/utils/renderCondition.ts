export const renderCondition = (filter:string, tipo:string) => {
  return filter === 'mais-recentes' ? typeof filter === 'string' : filter === tipo;
};
