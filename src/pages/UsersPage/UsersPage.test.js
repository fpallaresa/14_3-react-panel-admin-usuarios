import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UsersPage from './UsersPage';
import { IntlProvider } from 'react-intl';

describe('UserPage', () => {

  it('should render a table with user data after successful API call', async () => {
    const userData = [
      {
        id: 1,
        name: 'Name1',
        username: 'Username1',
        email: 'name@example.com',
        website: 'example.com',
      },
      {
        id: 2,
        name: 'Name2',
        username: 'Username2',
        email: 'name@example2.com',
        website: 'example2.com',
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(userData),
      ok: true,
    });

    render(
      <IntlProvider>
        <UsersPage />
      </IntlProvider>
    );

    await waitFor(() => {
      userData.forEach((user) => {
        expect(screen.getAllByText(user.name)).toHaveLength(1);
        expect(screen.getAllByText(user.username)).toHaveLength(1);
        expect(screen.getAllByText(user.email)).toHaveLength(1);
        expect(screen.getAllByText(user.website)).toHaveLength(1);
      });
    });
  });
});
