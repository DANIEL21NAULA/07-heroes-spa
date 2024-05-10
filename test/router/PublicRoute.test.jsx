import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';

describe('Test in PublicRoute', () => {
  test('should show the children if it is not authenticated', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>,
    );

    expect(screen.getByText('Ruta publica')).toBeTruthy();
  });

  test('should navigate if it is authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Daniel Naula',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={(
                <PublicRoute>
                  <h1>Ruta publica</h1>
                </PublicRoute>
              )}
            />
            <Route path="marvel" element={<h1>Pagina marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getByText('Pagina marvel')).toBeTruthy();
  });
});
