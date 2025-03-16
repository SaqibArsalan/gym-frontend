// Lib
/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';

// Routes
import RootRoute from './routes/RootRoute';

// Scss
import './assets/scss/index.scss';

// Redux Store
import store from './redux/store';

// Translations
import './translations';

// theming
import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme';
import { IAppProps } from 'config/interface';
import { disableDebuggerTools } from 'utils/Debugger';

function App(props: IAppProps) {
  const { mainTheme } = props;
  return (
      <Provider store={store}>
        {/*<ThemeProvider theme={mainTheme || theme}>*/}
          <div>
            <RootRoute store={store} />
          </div>
        {/*</ThemeProvider>*/}
      </Provider>
  );
}

// this code is for developer tools
if (process.env.NODE_ENV === 'production') {
  disableDebuggerTools(window);
}

export default App;
