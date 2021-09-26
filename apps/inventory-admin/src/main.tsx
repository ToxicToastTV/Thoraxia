import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { DataAccessInventory } from '@thoraxia/data-access-inventory';

ReactDOM.render(
  <StrictMode>
    <DataAccessInventory>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataAccessInventory>
  </StrictMode>,
  document.getElementById('root')
);
