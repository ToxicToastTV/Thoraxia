import { render } from '@testing-library/react';

import DataAccessTwitch from './data-access-twitch';

describe('DataAccessTwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessTwitch />);
    expect(baseElement).toBeTruthy();
  });
});
