import { useAppState } from '@thoraxia/data-access-inventory';
import { DevDebugger } from '@thoraxia/ui-components/index';

export function App() {

  const { appState } = useAppState();

  return (
    <>
      <DevDebugger data={appState} />
    </>
  );
}

export default App;
