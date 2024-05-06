import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeroesRoutes } from '../heroes/routes';
import { LoginPage } from '../auth';

export const AppRouter = () => (
  <>
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/*" element={<HeroesRoutes />} />
    </Routes>
  </>
);
