import { useAppState, useUiState } from '@thoraxia/data-access-inventory';
import {
  DevDebugger,
  Loading,
  TopNavigation,
} from '@thoraxia/ui-components/index';
import React from 'react';
import { useRouter } from '@thoraxia/ui-hooks';

export function App() {
  const { appState } = useAppState();
  const router = useRouter();
  const { setNavigation } = useUiState();

  React.useEffect(() => {
    const navigation: Array<{ title: string; route: string; }> = [];
    navigation.push({
      title: 'Categories',
      route: '/categories',
    });
    navigation.push({
      title: 'Companies',
      route: '/companies',
    });
    navigation.push({
      title: 'Rooms',
      route: '/rooms',
    });
    navigation.push({
      title: 'Types',
      route: '/types',
    });
    navigation.push({
      title: 'Sizes',
      route: '/sizes',
    });
    setNavigation(navigation);
  }, []);

  return (
    <React.Suspense fallback={<Loading color="text-green-700" />}>
      <TopNavigation isDark={true} navigation={appState.ui.navigation} />
      <DevDebugger data={appState} />
    </React.Suspense>
  );
}

export default App;
