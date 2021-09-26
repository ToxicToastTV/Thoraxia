import { useAppState } from '@thoraxia/data-access-inventory';
import { DevDebugger, Loading } from '@thoraxia/ui-components/index';
import React from 'react';

export function App() {

  const { appState } = useAppState();

  return (
    <React.Suspense fallback={<Loading />}>
      <DevDebugger data={appState} />
    </React.Suspense>
  );
}

export default App;
