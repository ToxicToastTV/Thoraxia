import React from 'react';

export function useToggle(initialState: boolean) {
  const [state, setState] = React.useState(initialState);
  const toggle = React.useCallback(() => {
    setState((state) => !state);
  }, []);
  return {
    state,
    toggle
  }
}
