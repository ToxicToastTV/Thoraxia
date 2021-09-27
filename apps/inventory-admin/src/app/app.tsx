import { useAppState } from '@thoraxia/data-access-inventory';
import { DevDebugger, Loading } from '@thoraxia/ui-components/index';
import React from 'react';
import { useRouter } from '@thoraxia/ui-hooks';

export function App() {
  const { appState } = useAppState();
  const { pathname, query } = useRouter();

  return (
    <React.Suspense fallback={<Loading color="text-green-700" />}>
      <DevDebugger data={appState} />
    </React.Suspense>
  );
}

export default App;
