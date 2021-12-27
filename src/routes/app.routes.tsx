import { Route, Routes } from 'react-router-dom';

import { Books } from '../pages/Book';
import { Home } from '../pages/Home';
import { NewBook } from '../pages/NewBook';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/books/update/:id" element={<NewBook />} />
      <Route path="/new" element={<NewBook />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export { AppRoutes };
