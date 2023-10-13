export const fetchNews = async (quanttity:string = '10') => {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${quanttity}`);
  const data = await response.json();
  return data;
};
