import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';
import Header from './Header';
import Spanish from '../../lang/es.json';
import English from '../../lang/en.json';

describe('Header', () => {
  const mockFunction = jest.fn();

  beforeEach(() => {
    mockFunction.mockClear();
  });

  it('should render the links with English messages', () => {
    render(
      <HashRouter>
        <IntlProvider locale='en' messages={English}>
          <Header setMessages={mockFunction} />
        </IntlProvider>
      </HashRouter>
    );

    const homeLink = screen.getByText('Home');
    const usersLink = screen.getByText('Users');
    const createUserLink = screen.getByText('Create User');

    expect(homeLink).toBeInTheDocument();
    expect(usersLink).toBeInTheDocument();
    expect(createUserLink).toBeInTheDocument();
  });

  it('should render the links with Spanish messages', () => {
    render(
      <HashRouter>
        <IntlProvider locale='es' messages={Spanish}>
          <Header setMessages={mockFunction} />
        </IntlProvider>
      </HashRouter>
    );

    const homeLink = screen.getByText('Inicio');
    const usersLink = screen.getByText('Usuarios');
    const createUserLink = screen.getByText('Crear usuario');

    expect(homeLink).toBeInTheDocument();
    expect(usersLink).toBeInTheDocument();
    expect(createUserLink).toBeInTheDocument();
  });

  it('should change locale to Spanish when Spanish button is clicked', () => {
    render(
      <HashRouter>
        <IntlProvider locale='en' messages={English}>
          <Header setMessages={mockFunction} />
        </IntlProvider>
      </HashRouter>
    );

    const spanishButton = screen.getByText('ES');
    fireEvent.click(spanishButton);

    expect(mockFunction).toHaveBeenCalledWith(Spanish);
  });

  it('should change locale to English when English button is clicked', () => {
    render(
      <HashRouter>
        <IntlProvider locale='es' messages={Spanish}>
          <Header setMessages={mockFunction} />
        </IntlProvider>
      </HashRouter>
    );

    const englishButton = screen.getByText('EN');
    fireEvent.click(englishButton);

    expect(mockFunction).toHaveBeenCalledWith(English);
  });
});
