import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../../../src/ui';
import { AuthContext } from '../../../src/auth';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));
describe('Tests en <Navbar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: 'ABC',
      name: 'Daniel Naula',
    },
    handleLogout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('should to show name authenticated user', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(contextValue.user.name).toBeTruthy();
  });

  test('should to called logout after logging out', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    const buttonLogout = screen.getByRole('button');
    fireEvent.click(buttonLogout);
    expect(contextValue.handleLogout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
