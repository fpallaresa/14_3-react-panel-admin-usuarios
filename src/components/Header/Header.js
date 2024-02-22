import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Flex, Heading, Container, Button } from '@chakra-ui/react';
import Spanish from '../../lang/es.json';
import English from '../../lang/en.json';
import './Header.scss'

const Header = ({ setMessages }) => {
  return (
    <Container display='flex' flexDirection='row' justifyContent='space-between' margin='25px auto' maxWidth='1280px' alignItems='center' background='var(--chakra-colors-gray-50)' borderRadius='10px' padding='5px 30px'>
      <Heading as='h3' size='lg' minWidth='200px' textAlign='left'>
        <FormattedMessage id='header.logo' />
      </Heading>
      <Flex justifyContent='center' flexDirection='row' gap='50px' width='60%' maxWidth='500px' margin='30px auto'>
        <NavLink to='/'>
          <FormattedMessage id='header.home' />
        </NavLink>
        <NavLink to='/users-page'>
          <FormattedMessage id='header.users' />
        </NavLink>
        <NavLink to='/create-users-page'>
          <FormattedMessage id='header.createUser' />
        </NavLink>
      </Flex>
      <Flex gap='20px'>
        <Button onClick={() => setMessages(Spanish)}>
          <FormattedMessage id='header.spanish' />
        </Button>
        <Button onClick={() => setMessages(English)}>
          <FormattedMessage id='header.english' />
        </Button>
      </Flex>
    </Container>
  );
};

export default Header;
