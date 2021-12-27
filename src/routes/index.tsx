import { useAuth } from '../hook/auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

function Routes() {
  const { token } = useAuth();

  return token ? <AppRoutes /> : <AuthRoutes />;
}

export { Routes };
