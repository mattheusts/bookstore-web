import { Route, Routes } from 'react-router-dom';

import { SignIn } from '../pages/Auth/SignIn';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { AuthRoutes };
