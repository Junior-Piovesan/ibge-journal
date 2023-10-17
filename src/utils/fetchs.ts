export const fetchNews = async (quant:string = '100') => {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${quant}`);
  const data = await response.json();
  return data.items;
};

export const fetchNewsRelease = async () => {
  const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
  const data = await response.json();

  return data.items;
};

export const fetchNewsNoticia = async () => {
  const response = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia');
  const data = await response.json();

  return data.items;
};
