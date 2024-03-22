import '@mantine/core/styles.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './constants';
import { Shell } from './common/Shell';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Shell />}>
          {routes.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;
