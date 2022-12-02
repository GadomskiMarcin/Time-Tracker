import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from './App';
import { mainTheme } from './theme/theme';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={mainTheme}>
          <App />
        </ChakraProvider>
      </Provider>
    </React.StrictMode>,
  );
