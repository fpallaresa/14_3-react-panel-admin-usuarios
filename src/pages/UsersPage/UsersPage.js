import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Heading, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';

const UserPage = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_INFO}`);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container maxWidth='980px'marginBottom='100px'>
      <Heading as='h1' marginBottom='25px'>
        <FormattedMessage id='users:title' />
      </Heading>
      <TableContainer borderRadius='6px' boxShadow='0.3em 0.3em 1em rgb(0 0 0 / 6%)'>
        <Table variant='simple' textAlign='left'>
          <Thead background='var(--chakra-colors-gray-50)' textTransform='uppercase'>
            <Tr>
              <Th>ID</Th>
              <Th>
                <FormattedMessage id='users:name' />
              </Th>
              <Th>
                <FormattedMessage id='users:username' />
              </Th>
              <Th>
                <FormattedMessage id='users:email' />
              </Th>
              <Th>
                <FormattedMessage id='users:website' />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.username}</Td>
                <Td>{user.email}</Td>
                <Td>{user.website}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserPage;
