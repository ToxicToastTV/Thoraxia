import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';
import { DataAccessAuth0 } from '@thoraxia/data-access-auth0';
import { environment } from './environments/environment';
import { HashRouter } from 'react-router-dom';
import SSE from './app/sse';

ReactDOM.render(
  <StrictMode>
      <DataAccessAuth0
        domain={environment.AUTH0_DOMAIN}
        clientId={environment.AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <HashRouter>
          <SSE key="SSE" />
          <App key="App" />
        </HashRouter>
      </DataAccessAuth0>
  </StrictMode>,
  document.getElementById('root')
);
