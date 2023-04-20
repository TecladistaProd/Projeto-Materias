import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Global, { theme } from '@/styles';

import Routes from './routes';

function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Global/>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </ThemeProvider>
    </main>
  )
}

export default App
