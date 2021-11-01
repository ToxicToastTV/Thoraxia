import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import App from './app/app';
import { DataAccessInventory } from '@thoraxia/data-access-inventory';
import { DataAccessAuth0 } from '@thoraxia/data-access-auth0';
import { environment } from './environments/environment';
import SSE from './app/sse';

ReactDOM.render(
  <StrictMode>
    <DataAccessInventory>
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
    </DataAccessInventory>
  </StrictMode>,
  document.getElementById('root')
);
