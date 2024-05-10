import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Tests in <AppRouter />', () => {
  test('should show the login if not authenticated', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('should show the marvel if authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Daniel Naula',
      },
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    // screen.debug();
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
  });
});
