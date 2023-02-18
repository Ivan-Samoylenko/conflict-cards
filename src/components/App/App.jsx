import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { PageNotFound } from 'pages/PageNotFound';
import { Menu } from 'pages/Menu';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
