import { render } from '@testing-library/react';

import DataAccessInventory from './data-access-inventory';

describe('DataAccessInventory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessInventory />);
    expect(baseElement).toBeTruthy();
  });
});
