export const calculateDate = (date:string) => {
  const dateCurrent = new Date().getDate();
  const monthCurrent = new Date().getMonth() + 1;

  const publicationDay = Number(date.substring(0, 2));
  const publicationMonth = Number(date.substring(3, 5));
  const publicationHour = Number(date.substring(11, 16));

  if (monthCurrent === publicationMonth && dateCurrent === publicationDay) {
    console.log(date);

    return `Publicado hoje as ${publicationHour} horas`;
  }
  if (monthCurrent === publicationMonth) {
    return `${dateCurrent - publicationDay} dias atrás`;
  }
  return `publicado ${date.substring(0, 10)}`;
};
