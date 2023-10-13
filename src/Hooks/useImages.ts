import { ImagesType } from '../types';

const useImages = (images:string) => {
  const imagesList:ImagesType = JSON.parse(images);

  const imagesObj = {
    image_fulltext: `https://agenciadenoticias.ibge.gov.br/${imagesList.image_fulltext}`,

    image_intro: `https://agenciadenoticias.ibge.gov.br/${imagesList.image_intro}`,

  };
  return { imagesObj };
};
export default useImages;
