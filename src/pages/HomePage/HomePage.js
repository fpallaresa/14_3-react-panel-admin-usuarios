import { FormattedMessage } from 'react-intl';
import { Container, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Container maxWidth='980px'>
      <Heading as='h1' marginBottom='25px'>
        <FormattedMessage id='home:welcome' />
      </Heading>
      <Text marginBottom='25px'><FormattedMessage id='home:userManagement' /></Text>
      <Text marginBottom='25px'><FormattedMessage id='home:apiDisclaimer' /></Text>
    </Container>
  );
};

export default HomePage;
