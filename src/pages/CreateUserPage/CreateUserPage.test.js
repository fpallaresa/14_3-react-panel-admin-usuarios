import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateUserPage from './CreateUserPage';
import { IntlProvider } from 'react-intl';

describe('CreateUserPage', () => {
  it('should show no errors when all fields are filled and submit button is clicked', async () => {
    render(
      <IntlProvider locale="en">
        <CreateUserPage />
      </IntlProvider>
    );

    const nameInput = screen.getByLabelText('createUserPage.name');
    const usernameInput = screen.getByLabelText('createUserPage.username');
    const emailInput = screen.getByLabelText('createUserPage.email');
    const phoneInput = screen.getByLabelText('createUserPage.phone');
    const websiteInput = screen.getByLabelText('createUserPage.website');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '123456789' } });
    fireEvent.change(websiteInput, { target: { value: 'example.com' } });

    expect(nameInput.value).toBeTruthy();
    expect(usernameInput.value).toBeTruthy();
    expect(emailInput.value).toBeTruthy();
    expect(phoneInput.value).toBeTruthy();
    expect(websiteInput.value).toBeTruthy();

    fireEvent.click(screen.getByText('createUserPage.submitButton'));

    await waitFor(() => {
      expect(screen.queryByText('This field is required')).not.toBeInTheDocument();
    });
  });
});
