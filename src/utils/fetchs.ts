export const fetchNews = async (quant:string = '100') => {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${quant}`);
  const data = await response.json();
  return data.items;
};
