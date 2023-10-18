import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

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

export type ReduxState = {
  newsReducer: {
    news: NewsType[],
    loading: boolean,
    error: boolean,
  },
  moreNewsReducer: {
    moreNews:number
  },
  userReducer: {
    user: string,
    email: string,
    favorites:NewsType[]
  },
  filterReducer: {
    filter:string[]
  }
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
