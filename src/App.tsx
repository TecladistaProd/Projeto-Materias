import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from "react-query";

import Global, { theme } from '@/styles';

import { EventBusProvider } from '@/hooks/useEventBus';

import Routes from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <main>
      <EventBusProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Global/>
            <BrowserRouter>
              <Routes/>
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </EventBusProvider>
    </main>
  )
}

export default App
