import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './app/app';
import { DataAccessInventory } from '@thoraxia/data-access-inventory';

ReactDOM.render(
  <StrictMode>
    <DataAccessInventory>
      <HashRouter>
        <App />
      </HashRouter>
    </DataAccessInventory>
  </StrictMode>,
  document.getElementById('root')
);
