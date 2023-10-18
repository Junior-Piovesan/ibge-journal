import { waitFor, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndRedux from '../utils/renderWithReduxAndRouter';

describe('Verifica popUp de erro', () => {
  it('Verifica se a popUps renderiza corretamente', async () => {
    renderWithRouterAndRedux(<App />);
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Encontramos um problema!' })).toBeInTheDocument();
      expect(screen.getByText('Recarregue a página e verifique sua conexão.')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Recarregar' })).toBeInTheDocument();
    });
  });
});
