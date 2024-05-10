import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    handleLogin('Daniel Naula');

    navigate(
      lastPath,
      {
        replace: true,
      },
    );
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  );
};
