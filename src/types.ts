import store from './redux';

export type GlobalState = ReturnType<typeof store.getState>;

export type NewsType = {
  id: number,
  tipo: string,
  titulo: string,
  introducao:string,
  data_publicacao: string,
  produto_id: 0,
  produtos: string,
  editorias: string,
  imagens: string,
  produtos_relacionados: string,
  destaque: true,
  link:string,
};

export type ImagesType = {
  image_fulltext:string,
  image_intro:string,
};
