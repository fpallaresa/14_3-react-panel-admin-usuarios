import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import HomePage from './HomePage';
import Spanish from '../../lang/es.json';
import English from '../../lang/en.json';

describe('HomePage', () => {
  const mockFunction = jest.fn();

  beforeEach(() => {
    mockFunction.mockClear();
  });
  
  it('search the page title (h1)', () => {
    render(
      <IntlProvider locale="en" messages={English}>
        <HomePage />
      </IntlProvider>);
    const title = screen.getByText('Welcome!');
    expect(title).toBeInTheDocument();
  });

  it('search the page title (h1)', () => {
    render(
      <IntlProvider locale="en" messages={Spanish}>
        <HomePage />
      </IntlProvider>);
    const title = screen.getByText('¡Bienvenido!');
    expect(title).toBeInTheDocument();
  });
});