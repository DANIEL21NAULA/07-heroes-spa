import { authReducer, types } from '../../../src/auth';

describe('Test in authReducer', () => {
  const initialState = {
    logged: false,
  };

  const user = {
    id: 'ABC',
    name: 'Daniel Naula',
  };

  test('return default state', () => {
    const newState = authReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('Login state', () => {
    const action = {
      type: types.login,
      payload: user,
    };
    const newState = authReducer(initialState, action);

    expect(newState.logged).toBeTruthy();
    expect(newState.user).toBe(action.payload);
  });

  test('Logout state', () => {
    const loginState = {
      logged: true,
      user,
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(loginState, action);

    expect(newState.logged).toBe(false);
    expect(newState.user).toBeUndefined();
  });
});
