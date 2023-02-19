import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { PageNotFound } from 'pages/PageNotFound';
import { Menu } from 'pages/Menu';
import { Game } from 'pages/Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/statistic" element={<p>game info</p>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
