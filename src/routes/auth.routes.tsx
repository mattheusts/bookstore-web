import { Route, Routes } from 'react-router-dom';

import { SignIn } from '../pages/Auth/SignIn';
import { Home } from '../pages/Home';

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export { AuthRoutes };
