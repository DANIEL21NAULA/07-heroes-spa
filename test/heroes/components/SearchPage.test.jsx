import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('test in <SearchPage />', () => {
  beforeEach(() => jest.clearAllMocks());

  test('should render component <SearchPage />', () => {
    const container = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('should show alert search a hero', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>,
    );
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('');

    const searchHeroAlert = container.querySelector('.alert');
    expect(searchHeroAlert.innerHTML).toContain('Search a hero');
    expect(searchHeroAlert.innerHTML).not.toContain('No found hero');
  });

  test('should show alert no found hero', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search?query=sadsa']}>
        <SearchPage />
      </MemoryRouter>,
    );
    const input = screen.getByRole('textbox');
    const searchHeroAlert = container.querySelector('.alert');

    expect(input.value).toBe('sadsa');
    expect(searchHeroAlert.innerHTML).toContain('No found hero');
    expect(searchHeroAlert.innerHTML).toContain('sadsa');
    expect(searchHeroAlert.innerHTML).not.toContain('Search a hero');
  });

  test('should show to batman and put input value of query string', () => {
    render(
      <MemoryRouter initialEntries={['/search?query=batman']}>
        <SearchPage />
      </MemoryRouter>,
    );
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');

    const heroImg = screen.getByRole('img');
    expect(heroImg.src).toContain('/assets/heroes/dc-batman.jpg');
  });

  test('should search hero superman', () => {
    const inputValue = 'superman';
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>,
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { name: 'searchText', value: inputValue } });

    const searchBtn = screen.getByRole('button');
    fireEvent.click(searchBtn);
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?query=${inputValue}`);
  });
});
