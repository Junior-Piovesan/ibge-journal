import useImages from '../../Hooks/useImages';
import { NewsType } from '../../types';

type Propstype = {
  newInfo:NewsType
};

export default function NewsCard({ newInfo }:Propstype) {
  const { imagesObj } = useImages(newInfo.imagens);

  return (
    <section>
      <article>
        <h1>{newInfo.titulo}</h1>
        <p>{newInfo.introducao}</p>
      </article>

      <div>
        <img src={ imagesObj.image_intro } alt="Imagem da notícia" />
      </div>

      <section>
        <span>{`Publicação: ${newInfo.data_publicacao}`}</span>
        <span>{newInfo.editorias}</span>
      </section>

    </section>
  );
}
