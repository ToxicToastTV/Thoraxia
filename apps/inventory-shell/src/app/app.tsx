import { useAppState, useUiState } from '@thoraxia/data-access-inventory';
import {
  DevDebugger,
  Loading,
  TopNavigation,
} from '@thoraxia/ui-components/index';
import React from 'react';

export function App() {
  const { appState } = useAppState();
  const { setNavigation } = useUiState();

  React.useEffect(() => {
    setNavigation([]);
  }, []);

  return (
    <React.Suspense fallback={<Loading color="text-green-700" />}>
      <TopNavigation isDark={true} navigation={appState.ui.navigation} />
      <DevDebugger data={appState} />
    </React.Suspense>
  );
}

export default App;
