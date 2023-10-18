import { getByRole, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';

import { vi } from 'vitest';

import { act } from 'react-dom/test-utils';
import renderWithRouterAndRedux from '../utils/renderWithReduxAndRouter';

import { newsMock } from './mocks/newsMock';

import * as API_MODULE from '../utils/fetchs';

import App from '../App';
import { currentDate } from '../utils/currentDate';
import { addLocalStorage } from '../utils/localStorage';

const NO_EXISTENT_ROUTE = 'rota/inexistente';
const EXISTING_ROUTE = '/';
const TITLE = 'IBGE Journal';
const LOADING = 'Carregando...';

const RECENTS = 'Mais recentes';
const RELEASE = 'Release';
const NOTICIA = 'Notícia';
const FAVORITES = 'Favoritos';

const IMAGE_NEWS = 'Imagem da notícia';

const LINK_PROFILE = 'icone de perfil';

const BTN_MAIS_NOTICIAS = 'Ver mais notícias';
const LINK_VOLTAR_AO_TOPO = 'Voltar ao topo';

const TEXT_FACA_LOGIN = 'Faça login para favoritar a notícia.';

const PROFILE_NAME = 'Teste';
const PROFILE_EMAIL = 'test@test.com';

const BTN_VOLTAR = 'voltar';

const BTN_FAVORITAR = 'icone favoritar';

const SRC_NO_FAVORITE = '/src/assets/favorite.svg';
const SRC_FAVORITE = '/src/assets/isFavorite.svg';

afterEach(() => vi.clearAllMocks());

beforeEach(() => vi.spyOn(API_MODULE, 'fetchNews').mockResolvedValue(newsMock));

describe('Verifica se os elementos renderizam como esperado.', () => {
  it('Verefica se ao passar uma rota inexistente a página renderiza o texto "Ops! Pagina não encontrada."', () => {
    renderWithRouterAndRedux(<App />, NO_EXISTENT_ROUTE);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Ops! Pagina não encontrada.');
  });

  it('Verefica se o Header renderiza os componentes corretamente.', () => {
    renderWithRouterAndRedux(<App />, EXISTING_ROUTE);

    const date = currentDate();

    const title = screen.getByRole('heading', { name: TITLE });
    const linkProfile = screen.getByRole('img', { name: 'icone de perfil' });

    expect(title).toBeInTheDocument();
    expect(linkProfile).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
  });

  it('Verefica se a barra de filtros renderiza os componentes corretamente.', () => {
    renderWithRouterAndRedux(<App />, EXISTING_ROUTE);

    const filterRecents = screen.getByText(RECENTS);
    const filterRelease = screen.getByText(RELEASE);
    const filterNoticia = screen.getByText(NOTICIA);
    const favoritesLink = screen.getByRole('link', { name: FAVORITES });

    expect(filterRecents).toBeInTheDocument();
    expect(filterRelease).toBeInTheDocument();
    expect(filterNoticia).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
  });

  it('Verificase se existe um footer com um botão ""Ver mais Notícias e um link "Voltar ao topo" .', async () => {
    renderWithRouterAndRedux(<App />, EXISTING_ROUTE);
    const loading = screen.getByText(LOADING);
    await waitForElementToBeRemoved(loading);

    const btnVerMaisNoticias = screen.getByRole('button', { name: BTN_MAIS_NOTICIAS });
    const linkVoltarAoTopo = screen.getByRole('link', { name: LINK_VOLTAR_AO_TOPO });

    expect(btnVerMaisNoticias).toBeInTheDocument();
    expect(linkVoltarAoTopo).toBeInTheDocument();
  });

  it('Verificase se são renderizadas 10 notícias.', async () => {
    renderWithRouterAndRedux(<App />, EXISTING_ROUTE);
    const loading = screen.getByText(LOADING);
    await waitForElementToBeRemoved(loading);

    const imageNewsList = screen.getAllByRole('img', { name: IMAGE_NEWS });
    expect(imageNewsList).toHaveLength(10);
  });
});

describe('Verifica se as funcionalidades estão funcionando como o esperado', () => {
  it('Verificase se ao clicar no botão "Ver mais notícias" renderizam mais 10 notícias na tela', async () => {
    const { user } = renderWithRouterAndRedux(<App />, EXISTING_ROUTE);
    const loading = screen.getByText(LOADING);
    await waitForElementToBeRemoved(loading);

    const imageNewsList = screen.getAllByRole('img', { name: IMAGE_NEWS });

    const buttonMainNoticias = screen.getByRole('button', { name: BTN_MAIS_NOTICIAS });

    expect(imageNewsList).toHaveLength(10);

    await user.click(buttonMainNoticias);

    const imageNewsList2 = screen.getAllByRole('img', { name: IMAGE_NEWS });
    expect(imageNewsList2).toHaveLength(20);
  });

  it('Verificase se ao entrar no app não é possivel Adicionar as notícias aos favoritos.', async () => {
    const { user } = renderWithRouterAndRedux(<App />, EXISTING_ROUTE);

    const loading = screen.getByText(LOADING);

    await waitForElementToBeRemoved(loading);

    const messageFacaLogin = screen.getAllByText(TEXT_FACA_LOGIN);
    const btnLinkFavorites = screen.getByRole('link', { name: FAVORITES });

    expect(messageFacaLogin).toHaveLength(10);

    await user.click(btnLinkFavorites);

    const titleMessage = await screen.findByRole('heading', { name: 'Faça o Login.' });

    expect(titleMessage).toBeInTheDocument();
  });

  it('Verificase se ao fazer login é renderiza o botão de favoritar .', async () => {
    const { user, debug } = renderWithRouterAndRedux(<App />, EXISTING_ROUTE);

    const loading = screen.getByText(LOADING);

    await waitForElementToBeRemoved(loading);

    const linkLogin = screen.getByRole('img', { name: LINK_PROFILE });

    await user.click(linkLogin);

    const inputName = screen.getByLabelText('Nome');
    const inputEmail = screen.getByLabelText('Email');
    const btnEnviar = screen.getByRole('button', { name: 'Enviar' });
    const btnVoltar = screen.getByRole('img', { name: BTN_VOLTAR });

    await user.type(inputName, PROFILE_NAME);
    await user.type(inputEmail, PROFILE_EMAIL);
    await user.click(btnEnviar);

    act(() => {
      expect(screen.getByText('Nome: Teste')).toBeInTheDocument();
      expect(screen.getByText('email: test@test.com')).toBeInTheDocument();
    });

    expect(inputName).toHaveValue('');
    expect(inputEmail).toHaveValue('');

    await user.click(btnVoltar);

    const favoriteList = screen.getAllByRole('img', { name: BTN_FAVORITAR });

    expect(favoriteList).toHaveLength(10);

    const btnLinkFavorites = screen.getByRole('link', { name: FAVORITES });

    await user.click(btnLinkFavorites);

    const noFavoritesMessage = screen.getByRole('heading', { name: 'Olá Teste, Você Não tem notícias favoritadas.' });
    expect(noFavoritesMessage).toBeInTheDocument();

    debug();
  });
});
