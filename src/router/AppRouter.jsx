import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeroesRoutes } from '../heroes/routes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => (
  <>
    <Routes>
      {/* <Route path="login" element={<LoginPage />} /> */}
      <Route
        path="login/*"
        element={(
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          </PublicRoute>
        )}
      />

      <Route
        path="/*"
        element={(
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        )}
      />
      {/* <Route path="/*" element={<HeroesRoutes />} /> */}
    </Routes>
  </>
);
