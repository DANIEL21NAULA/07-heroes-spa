import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const HeroesApp = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);
