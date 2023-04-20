import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from '@/screen/Home';

import Global, { theme } from '@/styles';

function App() {
  const location = useLocation();

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Global/>
        <BrowserRouter>
          <Routes location={location} key={location.pathname}>
            <Route element={<Home />} path="/" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </main>
  )
}

export default App
