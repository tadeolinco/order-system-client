import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const renderApp = Root => {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const newApp = require('./App').default;
    renderApp(newApp);
  });
}

registerServiceWorker();
