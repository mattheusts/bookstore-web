import { Route, Routes } from 'react-router-dom';

import { SignIn } from '../pages/Auth/SignIn';
import { SignUp } from '../pages/Auth/SignUp';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { AuthRoutes };
