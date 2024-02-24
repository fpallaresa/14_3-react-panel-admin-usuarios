import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import UsersPage from './pages/UsersPage/UsersPage';
import CreateUsersPage from './pages/CreateUserPage/CreateUserPage';
import Header from './components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';
import './App.scss';

const locale = navigator.language;
let defaultMessages = Spanish;
switch (locale) {
  case 'en-EN':
    defaultMessages = English;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  default:
    defaultMessages = English;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <HashRouter>
          <ChakraProvider>
            <Header setMessages={setMessages}></Header>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/users-page' element={<UsersPage />}></Route>
              <Route path='/create-users-page' element={<CreateUsersPage />}></Route>
            </Routes>
          </ChakraProvider>
        </HashRouter>
      </div>
    </IntlProvider>
  );
}

export default App;
