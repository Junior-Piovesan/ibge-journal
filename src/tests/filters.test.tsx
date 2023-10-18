import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import renderWithRouterAndRedux from '../utils/renderWithReduxAndRouter';

import * as API_MODULE from '../utils/fetchs';
import { newsMock } from './mocks/newsMock';

afterEach(() => vi.clearAllMocks());

const LOADING = 'Carregando...';

const FILTER_NOTICIA = 'Notícia';
const FILTER_RELEASE = 'Release';
const FILTER_MAIS_RECENTES = 'Mais recentes';

beforeEach(() => vi.spyOn(API_MODULE, 'fetchNews').mockResolvedValue(newsMock));

describe('Verifica se filtros', () => {
  it('Verifica se os filtros estão funcionando como esperado.', async () => {
    const { user } = renderWithRouterAndRedux(<App />, '/');

    const loading = screen.getByText(LOADING);
    await waitForElementToBeRemoved(loading);

    const filterRecentes = screen.getByLabelText(FILTER_MAIS_RECENTES);
    const filterRelease = screen.getByLabelText(FILTER_RELEASE);
    const filterNoticia = screen.getByLabelText(FILTER_NOTICIA);

    const noticiasList = screen.getAllByText(FILTER_NOTICIA);
    const releaseList = screen.getAllByText(FILTER_RELEASE);

    expect(noticiasList[0]).toBeInTheDocument();
    expect(releaseList[0]).toBeInTheDocument();

    await user.click(filterRelease);

    const releaseFilterList = screen.getAllByText(FILTER_RELEASE);

    const noticiasFilterList = screen.getAllByText(FILTER_NOTICIA);

    expect(releaseFilterList).toHaveLength(10);
    expect(noticiasFilterList).toHaveLength(1);

    await user.click(filterNoticia);

    const releaseFilterList2 = screen.getAllByText(FILTER_RELEASE);

    const noticiasFilterList2 = screen.getAllByText(FILTER_NOTICIA);

    expect(releaseFilterList2).toHaveLength(1);
    expect(noticiasFilterList2).toHaveLength(12);

    await user.click(filterRecentes);

    const noticiasList2 = screen.getAllByText(FILTER_NOTICIA);
    const releaseList2 = screen.getAllByText(FILTER_RELEASE);

    expect(noticiasList2[1]).toBeInTheDocument();
    expect(releaseList2[1]).toBeInTheDocument();
  });
});
