import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../auth';

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  useEffect(() => {
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
  }, [pathname, search]);

  return (logged)
    ? children
    : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object,
};

PrivateRoute.defaultProps = {
  children: {},
};
