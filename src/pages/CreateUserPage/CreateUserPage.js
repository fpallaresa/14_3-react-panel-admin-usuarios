import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { ChakraProvider, Container, Heading, Button, Input, FormControl, FormLabel, extendTheme, FormErrorMessage } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label': {
              ...activeLabelStyles,
            },
          },
        },
      },
    },
  },
});

const CreateUserPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { formatMessage } = useIntl();
  const [input, setInput] = React.useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      window.location.href = '#/users-page';
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => setInput(event.target.value);

  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth='980px' display='flex' flexDirection='column' alignItems='center'>
        <Heading as='h1' marginBottom='25px'>
          <FormattedMessage id='createUserPage.title' />
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl variant='floating' isInvalid={errors.name} id={formatMessage({ id: 'createUserPage.name' })} marginBottom='20px' width='500px'>
            <Input
              placeholder={formatMessage({ id: 'createUserPage.name' })}
              type='text'
              size='md'
              defaultValue={input}
              onChange={handleInputChange}
              {...register('name', {
                required: {
                  value: true,
                  message: <FormattedMessage id='createUserPage.required' />,
                },
              })}
            />
            <FormLabel top='0' left='0' zIndex='2' position='absolute' backgroundColor='white' pointerEvents='none' mx='3' px='1' my='2' transformOrigin='left top'>
              <FormattedMessage id='createUserPage.name' />
            </FormLabel>
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>
          <FormControl variant='floating' isInvalid={errors.username} id={formatMessage({ id: 'createUserPage.username' })} marginBottom='20px' width='500px'>
            <Input
              placeholder={formatMessage({ id: 'createUserPage.username' })}
              type='text'
              size='md'
              defaultValue={input}
              onChange={handleInputChange}
              {...register('username', {
                required: {
                  value: true,
                  message: <FormattedMessage id='createUserPage.required' />,
                },
              })}
            />
            <FormLabel top='0' left='0' zIndex='2' position='absolute' backgroundColor='white' pointerEvents='none' mx='3' px='1' my='2' transformOrigin='left top'>
              <FormattedMessage id='createUserPage.username' />
            </FormLabel>
            <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
          </FormControl>
          <FormControl variant='floating' isInvalid={errors.email} id={formatMessage({ id: 'createUserPage.email' })} marginBottom='20px' width='500px'>
            <Input
              placeholder={formatMessage({ id: 'createUserPage.email' })}
              type='email'
              size='md'
              defaultValue={input}
              onChange={handleInputChange}
              {...register('email', {
                required: {
                  value: true,
                  message: <FormattedMessage id='createUserPage.required' />,
                },
              })}
            />
            <FormLabel top='0' left='0' zIndex='2' position='absolute' backgroundColor='white' pointerEvents='none' mx='3' px='1' my='2' transformOrigin='left top'>
              <FormattedMessage id='createUserPage.email' />
            </FormLabel>
            <FormErrorMessage>{errors.username ? errors.username.message : null}</FormErrorMessage>
          </FormControl>
          <FormControl variant='floating' isInvalid={errors.phone} id={formatMessage({ id: 'createUserPage.phone' })} marginBottom='20px' width='500px'>
            <Input
              placeholder={formatMessage({ id: 'createUserPage.phone' })}
              type='number'
              size='md'
              defaultValue={input}
              onChange={handleInputChange}
              {...register('phone', {
                required: {
                  value: true,
                  message: <FormattedMessage id='createUserPage.required' />,
                },
              })}
            />
            <FormLabel top='0' left='0' zIndex='2' position='absolute' backgroundColor='white' pointerEvents='none' mx='3' px='1' my='2' transformOrigin='left top'>
              <FormattedMessage id='createUserPage.phone' />
            </FormLabel>
            <FormErrorMessage>{errors.phone ? errors.phone.message : null}</FormErrorMessage>
          </FormControl>
          <FormControl variant='floating' isInvalid={errors.website} id={formatMessage({ id: 'createUserPage.website' })} marginBottom='20px' width='500px'>
            <Input
              placeholder={formatMessage({ id: 'createUserPage.website' })}
              type='text'
              size='md'
              defaultValue={input}
              onChange={handleInputChange}
              {...register('website', {
                required: {
                  value: true,
                  message: <FormattedMessage id='createUserPage.required' />,
                },
              })}
            />
            <FormLabel top='0' left='0' zIndex='2' position='absolute' backgroundColor='white' pointerEvents='none' mx='3' px='1' my='2' transformOrigin='left top'>
              <FormattedMessage id='createUserPage.website' />
            </FormLabel>
            <FormErrorMessage>{errors.website && errors.website.message}</FormErrorMessage>
          </FormControl>
          <Button type='submit'>
            <FormattedMessage id='createUserPage.submitButton' />
          </Button>
        </form>
      </Container>
    </ChakraProvider>
  );
};

export default CreateUserPage;
